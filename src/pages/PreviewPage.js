"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../styles/PreviewPage.css"

const fallbackData = {
    id: 1,
    searchTitle: "gia-dinh-bao-to",
    releaseYear: 2024,
    voteAverage: 8.8,
    metadataId: 101,
    numberOfEpisodes: 21,
    categories: ["Hài", "Gia Đình", "Tâm Lý"],
    metadata: {
        id: 101,
        movieId: 1,
        title: "Gia Đình Bảo Tổ",
        originalTitle: "Original Title",
        description:
            "Câu chuyện xoay quanh gia đình Bảo Tổ với những tình huống hài hước và cảm động trong cuộc sống hàng ngày.",
        numberOfEpisodes: 21,
        voteAverage: 8.8,
        voteCount: 1200,
        popularity: 100,
        posterPath: "/thumbnail/gia_dinh_bao_to.png",
        backdropPath: "/banners/gia_dinh_bao_to.png",
        releaseDate: "2024-01-01",
        country: "Việt Nam",
        originalLanguage: "vi",
        genre: ["Hài", "Gia Đình", "Tâm Lý"],
        actors: [
            { id: 1, name: "Trấn Thành", profilePath: "/actors/tran_thanh.jpg" },
            { id: 2, name: "Lê Giang", profilePath: "/actors/le_giang.jpg" },
            { id: 3, name: "Tuấn Trần", profilePath: "/actors/tuan_tran.jpg" },
            { id: 4, name: "NSND Hồng Vân", profilePath: "/actors/hong_van.jpg" },
            { id: 5, name: "Lê Dương Bảo Lâm", profilePath: "/actors/bao_lam.jpg" },
        ],
        status: "Đang chiếu",
    },
}

export default function PreviewPage() {
    const { movieId } = useParams()
    const [movieData, setMovieData] = useState(null)
    const [activeTab, setActiveTab] = useState("episodes")
    const actorBasePath = "https://image.tmdb.org/t/p/w154"

    useEffect(() => {
        if (!movieId) return

        const fetchMovieData = async () => {
            try {
                const res = await fetch(`https://api.ryan-healthcare.com/movie/${movieId}`)
                if (res.ok) {
                    const data = await res.json()
                    setMovieData(data)
                } else {
                    console.warn(`HTTP error ${res.status}, using fallback data`)
                    setMovieData(fallbackData)
                }
            } catch (error) {
                console.warn("Fetch failed, using fallback data:", error.message)
                setMovieData(fallbackData)
            }
        }

        void fetchMovieData()

    }, [movieId])

    if (!movieData) {
        return (
            <div className="movie-preview-container">
                <p style={{ padding: "20px", textAlign: "center" }}>Retrieving Film Data...</p>
            </div>
        )
    }

    const meta = movieData.metadata || {}
    const actors = meta.actors || []
    const genres = meta.genre || []

    return (
        <div className="movie-preview-container">
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <img
                    src={meta.backdropPath}
                    alt={meta.title}
                    className="hero-image"
                />
            </div>

            <div className="main-content">
                <div className="content-wrapper">
                    <aside className="left-sidebar">
                        <div className="movie-poster">
                            <img
                                src={meta.posterPath}
                                alt={meta.title}
                            />
                        </div>

                        <h2 className="movie-title">{meta.title || "Updating"}</h2>
                        <h2 className="movie-original-title">{meta.originalTitle || "Updating"}</h2>

                        <div className="movie-meta">
                            <span className="rating">
                                <span className="rating-number">
                                    {meta.voteAverage ? meta.voteAverage.toFixed(1) : "N/A"}
                                </span>
                                <span className="rating-total">
                                    /{meta.voteCount ? meta.voteCount.toLocaleString() : "0"}
                                </span>
                            </span>
                            <span className="year">
                                {movieData.releaseYear || meta.releaseDate || "—"}
                            </span>
                            <span className="duration">
                                {movieData.numberOfEpisodes
                                    ? `${movieData.numberOfEpisodes} episodes`
                                    : "Updating"}
                            </span>
                        </div>

                        <div className="genre-tags">
                            {genres.map((genre, index) => (
                                <span key={index} className="genre-tag">
                                    {genre}
                                </span>
                            ))}
                        </div>

                        <div className="movie-info">
                            <div className="info-item">
                                <span className="info-label">Status:</span>
                                <span className="info-value">{meta.status || "Updating"}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Nationality:</span>
                                <span className="info-value">{meta.country || "—"}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Original Language:</span>
                                <span className="info-value">{meta.originalLanguage || "—"}</span>
                            </div>
                        </div>

                        <div className="cast-section">
                            <h3 className="section-title">Actors</h3>
                            <div className="cast-grid">
                                {actors.length > 0 ? (
                                    actors.map((actor, index) => (
                                        <div key={index} className="cast-member">
                                            <img
                                                src={actorBasePath + actor.profilePath}
                                                alt={actor.name}
                                                className="cast-avatar"
                                            />
                                            <span className="cast-name">{actor.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p>Updating...</p>
                                )}
                            </div>
                        </div>
                    </aside>

                    <main className="main-area">
                    <div className="action-buttons">
                            <button className="btn-primary">
                                <span className="play-icon">▶</span>
                                Watch Now
                            </button>
                            <button className="btn-icon" title="Love this film">
                                <span>♥</span>
                            </button>
                            <button className="btn-icon" title="Add to wishlist">
                                <span>+</span>
                            </button>
                            <button className="btn-icon" title="Share">
                                <span>⤴</span>
                            </button>
                            <button className="btn-icon" title="Download">
                                <span>⬇</span>
                            </button>
                        </div>

                        <div className="ad-banner">
                            <div className="ad-content">ADVERTISING</div>
                        </div>

                        <div className="tabs-container">
                            <div className="tabs">
                                <button
                                    className={`tab ${activeTab === "episodes" ? "active" : ""}`}
                                    onClick={() => setActiveTab("episodes")}
                                >
                                    Episodes
                                </button>
                                <button
                                    className={`tab ${activeTab === "info" ? "active" : ""}`}
                                    onClick={() => setActiveTab("info")}
                                >
                                    Introduction
                                </button>
                                <button
                                    className={`tab ${activeTab === "comments" ? "active" : ""}`}
                                    onClick={() => setActiveTab("comments")}
                                >
                                    Comments
                                </button>
                                <button
                                    className={`tab ${activeTab === "collection" ? "active" : ""}`}
                                    onClick={() => setActiveTab("collection")}
                                >
                                    Collections
                                </button>
                            </div>

                            <div className="tab-content">
                                {activeTab === "episodes" && (
                                    <div className="episodes-content">
                                        <div className="episodes-grid">
                                            {Array.from(
                                                { length: movieData.numberOfEpisodes || 1 },
                                                (_, i) => (
                                                    <button key={i} className="episode-btn">
                                                        Epi {i + 1}
                                                    </button>
                                                )
                                            )}
                                        </div>

                                        <div className="rating-section">
                                            <h4>Rate ({meta.voteCount || 0})</h4>
                                            <div className="rating-display">
                                                <span className="rating-score">
                                                    {meta.voteAverage ? meta.voteAverage.toFixed(1) : "N/A"}
                                                </span>
                                                <span className="rating-stars">★★★★★</span>
                                            </div>
                                            <p className="rating-prompt">
                                                Please login to rate
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "info" && (
                                    <div className="info-content">
                                        <h3>Giới thiệu</h3>
                                        <p>{meta.description || "No description"}</p>
                                    </div>
                                )}

                                {activeTab === "comments" && (
                                    <div className="comments-content">
                                        <p>Not implemented yet</p>
                                    </div>
                                )}

                                {activeTab === "collection" && (
                                    <div className="collection-content">
                                        <p>No collections</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}