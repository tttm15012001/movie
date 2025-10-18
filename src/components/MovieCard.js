import { Link } from "react-router-dom"
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
    return (
            <Link to={`/movie/preview/${movie.tag}`}>
                <div className="movie-card">
                    <div className="movie-poster">
                        <img src={movie.poster || "/banners/mat_ngot_chet_ruoi.png"} alt={movie.title}/>
                        <div className="tag-bar">
                            {movie.episodes && <div className="tag episode">PD. {movie.episodes}</div>}
                            {movie.subType && <div className="tag sub">TM. {movie.subType}</div>}
                        </div>
                    </div>
                    <div className="movie-info">
                        <h3 className="movie-title">{movie.title}</h3>
                        <p className="movie-subtitle">{movie.englishTitle}</p>
                    </div>
                </div>
            </Link>
);
}


export default MovieCard
