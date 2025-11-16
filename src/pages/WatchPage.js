"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../styles/WatchPage.css"
import { dummyData } from "../lib/dummyData"
import VideoPlayer from "../components/VideoPlayer"

export default function WatchPage() {
    const { movieId } = useParams()
    const [movieData, setMovieData] = useState(null)
    const [manifestUrl, setManifestUrl] = useState("")
    const [commentText, setCommentText] = useState("")
    const [activeEpisode, setActiveEpisode] = useState(1)

    const baseUrl = "https://api.ryan-healthcare.com"
    const actorImageBase = "https://image.tmdb.org/t/p/w154"
    const commentMaxLength = 1000;

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
                    setMovieData(dummyData)
                }
            } catch (error) {
                console.warn("Fetch failed, using fallback data:", error.message)
                setMovieData(dummyData)
            }
        }

        void fetchMovieData()
    }, [movieId])

    useEffect(() => {
        if (!movieData?.searchTitle) return

        const fetchManifest = async () => {
            try {
                const res = await fetch(`${baseUrl}/${movieData.searchTitle}/manifest`, {
                    credentials: "include",
                })

                if (res.ok) {
                    const data = await res.json()
                    setManifestUrl(data.manifestUrl)
                } else {
                    console.warn(`HTTP error ${res.status} while fetching manifest`)
                }
            } catch (error) {
                console.warn("Manifest fetch failed:", error.message)
            }
        }

        void fetchManifest()
    }, [movieData])

    if (!movieData) {
        return (
            <div className="watch-page">
                <p style={{ padding: "20px", textAlign: "center" }}>
                    Retrieving Film Data...
                </p>
            </div>
        )
    }

    const meta = movieData.metadata || {}
    const actors = meta.actors || []
    const genres = meta.genre || []
    const totalEpisodes =
        meta.numberOfEpisodes ?? 0

    return (
        <div className="watch-page">
            <div className="player-section">
                {manifestUrl ? <VideoPlayer url={manifestUrl}/> : <p>Loading...</p>}
            </div>
            <div className="watch-layout">
                <main className="watch-main">
                    <section className="movie-summary">
                        <div className="summary-left">
                            <div className="summary-poster">
                                <img
                                    src={meta.posterPath}
                                    alt={meta.title}
                                />
                            </div>

                            <div className="summary-info">
                                <h1 className="movie-title">
                                    {meta.title || "Updating"}
                                </h1>
                                <p className="movie-original-title">
                                    {meta.originalTitle || "Updating"}
                                </p>

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
                                        {meta.releaseDate ?? "—"}
                                    </span>
                                            <span className="duration">
                                        {meta.numberOfEpisodes ?? "Updating"}
                                    </span>
                                </div>

                                <div className="genre-tags">
                                    {genres.map((genre, index) => (
                                        <span key={index} className="genre-tag">
                                            {genre}
                                        </span>
                                    ))}
                                </div>

                                <div className="status-row">
                                    <span className="status-dot"/>
                                    <span className="status-text">
                                        {meta.status || "Updating"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="summary-right">
                            <p className="movie-description">
                                {meta.description ||
                                    "Updating..."}
                            </p>
                        </div>
                    </section>

                    <div className="divider"/>

                    <section className="broadcast-alert">
                        <div className="broadcast-icon">🔔</div>
                        <p>
                            Subscribe to not miss any latest movies 😘
                        </p>
                    </section>

                    {/* Episodes */}
                    <section className="episodes-section">
                        <div className="episodes-grid">
                            {Array.from({length: totalEpisodes || 1}).map(
                                (_, index) => {
                                    const epi = index + 1
                                    return (
                                        <button
                                            key={epi}
                                            className={`episode-btn ${
                                                activeEpisode === epi
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setActiveEpisode(epi)
                                            }
                                        >
                                            <span className="episode-play">
                                                ▶
                                            </span>
                                            <span>Epi {epi}</span>
                                        </button>
                                    )
                                }
                            )}
                        </div>
                    </section>

                    <div className="ad-banner">
                        <div className="ad-content">ADVERTISING</div>
                    </div>

                    {/* Comments */}
                    <section className="comments-section">
                        <div className="comments-header">
                            <div className="comments-title">
                                <span className="comment-icon">💬</span>
                                <h3>Comments (188)</h3>
                            </div>
                            <div className="comment-tabs">
                                <button className="comment-tab active">
                                    Comment
                                </button>
                                <button className="comment-tab">
                                    Rate
                                </button>
                            </div>
                        </div>

                        <p className="login-note">
                            Please{" "}
                            <span className="login-link">login</span> to
                            join the comments.
                        </p>

                        <div className="comment-box">
                            <textarea
                                maxLength={commentMaxLength}
                                placeholder="Write your comment"
                                value={commentText}
                                onChange={(e) =>
                                    setCommentText(e.target.value)
                                }
                            />
                            <div className="comment-bottom">
                                <div className="comment-left">
                                    <label className="reveal-toggle">
                                        <input type="checkbox"/>
                                        <span>Anonymous?</span>
                                    </label>
                                </div>
                                <div className="comment-right">
                                    <span className="char-count">
                                        {commentText.length} / {commentMaxLength}
                                    </span>
                                    <button className="send-comment-btn">
                                        Send
                                        <span className="send-icon">▶</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <aside className="watch-sidebar">
                    <div className="sidebar-divider"/>
                    <div className="cast-section">
                        <h3 className="section-title">Actors</h3>
                        <div className="cast-grid">
                            {actors.length > 0 ? (
                                actors.map((actor, index) => (
                                    <div key={index} className="cast-member">
                                        <img
                                            src={actorImageBase + actor.profilePath}
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
            </div>
        </div>
    )
}
