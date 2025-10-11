import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { getVideoManifest } from "../api/videoApi";

function WatchPage({ movieName }) {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        getVideoManifest(movieName).then(data => setUrl(data.manifestUrl));
    }, [movieName]);

    return (
        <div>
            <h2>Now Watching</h2>
            {url ? <VideoPlayer url={url} /> : <p>Loading...</p>}
        </div>
    );
}

export default WatchPage;
