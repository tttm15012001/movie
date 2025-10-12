import { Link } from "react-router-dom"

function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.tag}`} className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster || "/placeholder.svg"} alt={movie.title} />
                <div className="tag-bar">
                    {movie.episodes && <div className="tag episode">PD. {movie.episodes}</div>}
                    {movie.subType && <div className="tag sub">TM. {movie.subType}</div>}
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-subtitle">{movie.englishTitle}</p>
            </div>
        </Link>
    );
}


export default MovieCard
