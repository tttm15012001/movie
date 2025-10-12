"use client"
import { useParams, Link } from "react-router-dom"
import { movies } from "../data/movies"
import WatchPage from "./WatchPage";

function MovieView() {
    const { tag } = useParams()
    const movie = movies.find((m) => m.tag === tag)

    if (!movie) {
        return (
            <div className="movie-view">
                <div className="not-found">
                    <h2>Movie not found</h2>
                    <Link to="/" className="back-button">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="movie-view">
            <Link to="/" className="back-button">
                ← Back to Home
            </Link>

            <div className="movie-header">
                <h1 className="movie-view-title">{movie.title}</h1>
                <div className="movie-view-meta">
                    <span className="meta-item">⭐ {movie.rating}</span>
                    <span className="meta-item">{movie.year}</span>
                    <span className="meta-item">{movie.genre}</span>
                    <span className="meta-item">⏱️ {movie.duration}</span>
                </div>
            </div>

            <WatchPage movieName={movie.tag} />

            <div className="movie-details">
                <h2>Overview</h2>
                <p className="movie-description">{movie.description}</p>
            </div>

            <div className="related-section">
                <h2>More Like This</h2>
                <div className="related-movies">
                    {movies
                        .filter((m) => m.genre === movie.genre && m.id !== movie.id)
                        .slice(0, 4)
                        .map((relatedMovie) => (
                            <Link key={relatedMovie.id} to={`/movie/${relatedMovie.id}`} className="related-movie">
                                <img src={relatedMovie.poster || "/placeholder.svg"} alt={relatedMovie.title} />
                                <p>{relatedMovie.title}</p>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default MovieView
