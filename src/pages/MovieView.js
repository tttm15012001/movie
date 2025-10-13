import React from "react"
import { useParams, Link } from "react-router-dom"
import { movies } from "../data/movies"
import VideoPlayer from "../components/VideoPlayer"

function MovieView() {
    const { tag } = useParams()
    const movie = movies.find((m) => m.tag === tag)

    if (!movie) {
        return (
            <div className="not-found">
                <h2>Movie not found</h2>
                <Link to="/" className="back-button">
                    Back to Home
                </Link>
            </div>
        )
    }

    return (
        <div className="movie-view">
            {/* Banner Section */}
            <div
                className="movie-banner"
                style={{
                    backgroundImage: `url(${movie.banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    height: "400px",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "40px",
                        color: "#fff",
                    }}
                >
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>{movie.title}</h1>
                    <p style={{ fontSize: "1.1rem", color: "#ccc" }}>{movie.englishTitle}</p>
                </div>
            </div>

            {/* Main Content */}
            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    marginTop: "2rem",
                    flexWrap: "wrap",
                }}
            >
                {/* Poster */}
                <div style={{ flex: "0 0 280px" }}>
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        style={{
                            width: "100%",
                            borderRadius: "12px",
                            objectFit: "cover",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        }}
                    />
                    <div style={{ marginTop: "1rem" }}>
                        <Link to="/" className="back-button">
                            ← Back
                        </Link>
                    </div>
                </div>

                {/* Details */}
                <div style={{ flex: "1", color: "#e1e1e1" }}>
                    <h2 style={{ marginBottom: "0.5rem", fontSize: "1.8rem" }}>{movie.title}</h2>
                    <p style={{ fontSize: "1rem", color: "#b8b8d1" }}>{movie.description}</p>

                    <div
                        style={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.3rem",
                            fontSize: "0.95rem",
                        }}
                    >
            <span>
              <strong>Genre:</strong> {movie.genre}
            </span>
                        <span>
              <strong>Year:</strong> {movie.year}
            </span>
                        <span>
              <strong>Duration:</strong> {movie.duration}
            </span>
                        <span>
              <strong>Director:</strong> {movie.director}
            </span>
                        <span>
              <strong>Cast:</strong> {movie.cast.join(", ")}
            </span>
                        <span>
              <strong>Country:</strong> {movie.country}
            </span>
                        <span>
              <strong>Rating:</strong> ⭐ {movie.rating}
            </span>
                    </div>
                </div>
            </div>

            {/* Video Player */}
            <div style={{ marginTop: "3rem" }}>
                <VideoPlayer src={movie.videoUrl} poster={movie.poster} />
            </div>
        </div>
    )
}

export default MovieView
