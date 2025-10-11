const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getVideoManifest(movieName) {
    const res = await fetch(`${API_BASE_URL}/movie/${movieName}/manifest`, {
        method: "GET",
        credentials: "include",
    });

    if (!res.ok) throw new Error("Failed to fetch manifest");
    return res.json();
}
