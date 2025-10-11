import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";

function VideoPlayer({ url }) {
    const videoRef = useRef();
    const [qualities, setQualities] = useState([]);
    const [currentQuality, setCurrentQuality] = useState("auto");

    useEffect(() => {
        if (!url) return;
        let hls;

        if (Hls.isSupported()) {
            hls = new Hls({
                xhrSetup: (xhr) => {
                    xhr.withCredentials = true;
                },
                fetchSetup: (context, init) => {
                    return new Request(context.url, {
                        ...init,
                        credentials: "include",
                    });
                },
            });

            hls.loadSource(url);
            hls.attachMedia(videoRef.current);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                const available = hls.levels.map((l) => l.height).sort((a, b) => a - b);
                setQualities(["auto", ...available]);
                console.log("Available qualities:", available);
            });

            hls.updateQuality = (quality) => {
                if (quality === "auto") {
                    hls.currentLevel = -1;
                } else {
                    const index = hls.levels.findIndex((l) => l.height === parseInt(quality));
                    hls.currentLevel = index;
                }
                setCurrentQuality(quality);
            };

            window.hls = hls; // expose globally for UI handler

            return () => {
                hls.destroy();
                window.hls = null;
            };
        } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
            videoRef.current.src = url;
        }
    }, [url]);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <video
                ref={videoRef}
                controls
                crossOrigin="use-credentials"
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                }}
            />
            {qualities.length > 0 && (
                <div style={{ marginTop: "10px" }}>
                    <label style={{ marginRight: "8px" }}>Quality:</label>
                    <select
                        value={currentQuality}
                        onChange={(e) => window.hls?.updateQuality(e.target.value)}
                    >
                        {qualities.map((q) => (
                            <option key={q} value={q}>
                                {q === "auto" ? "Auto" : `${q}p`}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}

export default VideoPlayer;
