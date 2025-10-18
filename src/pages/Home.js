"use client"

import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

function Home() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("All")

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("http://localhost:8080/movie/top-list")
                if (!response.ok) throw new Error("Failed to fetch movies")
                const data = await response.json()
                setCategories(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [])

    if (loading) return <p className="text-center mt-10">Đang tải dữ liệu phim...</p>
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>

    // Collect all movies to extract genres
    const allMovies = categories.flatMap((cat) => cat.movies || [])
    const genres = ["All", ...new Set(allMovies.flatMap((m) => m.genre || []))]

    const filteredMovies = allMovies.filter((movie) => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre)
        return matchesSearch && matchesGenre
    })

    return (
        <div className="home">
            <header className="header">
                <h1 className="site-title">🎬 MovieFlix</h1>
                <p className="site-subtitle">Watch unlimited movies, anytime</p>
            </header>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="genre-filters">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            className={`genre-button ${selectedGenre === genre ? "active" : ""}`}
                            onClick={() => setSelectedGenre(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>

            {searchTerm || selectedGenre !== "All" ? (
                <div className="movies-grid">
                    <div className="topics_list single">
                        {filteredMovies.length > 0 ? (
                            filteredMovies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No movies found. Try a different search or filter.</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="movies-grid">
                    {categories.map((cat) => (
                        <div className="topics_list single">
                            <div className="category-header">
                                <div className="category-left">
                                    <h2 className="category-title">{cat.category.name}</h2>
                                    <a className="view-all" href={`/category/${cat.category.id}`}>Xem toàn bộ →</a>
                                </div>

                                <div className="movie-card-container">
                                    {cat.movies.map((movie) => (
                                        <MovieCard key={movie.id} movie={movie}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
