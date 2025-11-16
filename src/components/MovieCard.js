import { Link } from "react-router-dom"
import "../styles/MovieCard.css";
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL
const BACKDROP_BASE_URL = IMAGE_BASE_URL + process.env.REACT_APP_BACKDROP_WIDTH

function MovieCard({ movie }) {
    const backdrop = movie.backdrop
        ? `${BACKDROP_BASE_URL}${movie.backdrop}`
        : "/default/backdrop.png";
    return (
            <Link to={`/movie/preview/${movie.id}`}>
                <div className="movie-card">
                    <div className="movie-poster">
                        <img src={backdrop} alt={movie.title}/>
                    </div>
                    <div className="movie-info">
                        <p className="movie-title">{movie.title}</p>
                    </div>
                </div>
            </Link>
);
}


export default MovieCard
