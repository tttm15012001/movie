"use client"

import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Home() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("All")

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/movie/top-list`)
                if (response.ok) {
                    const data = await response.json()
                    setCategories(data)
                } else {
                    console.warn(`HTTP error ${response.status}`)
                    setError("Failed to fetch movies")
                }
            } catch (err) {
                console.warn("Fetch movies failed:", err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        void fetchMovies()
    }, [])

    if (loading) return <p className="text-center mt-10">Loading movie data ...</p>
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>

    const allMovies = categories.flatMap(cat => cat.movies || [])

    const extractPrimaryGenre = (movie) => {
        const primaryId = movie.primaryCategory;

        const match = movie.categories?.find(obj => {
            const id = Number(Object.keys(obj)[0]);
            return id === primaryId;
        });

        if (!match) return null;

        const id = Number(Object.keys(match)[0]);
        const name = match[id];

        return { id, name };
    };

    const allGenres = allMovies.flatMap(extractPrimaryGenre)

    const uniqueGenres = [
        "All",
        ...Array.from(
            new Map(allGenres.map(g => [g.id, g.name])).entries()
        ).map(([id, name]) => ({ id, name }))
    ]

    const filteredMovies = allMovies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesGenre =
            selectedGenre === "All" ||
            movie.primaryCategory === selectedGenre

        return matchesSearch && matchesGenre
    })

    return (
        <div className="home">
            <header className="header">
                <h1 className="site-title">Ryan Theater</h1>
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
                    {uniqueGenres.map(genre =>
                        genre === "All" ? (
                            <button
                                key="All"
                                className={`genre-button ${selectedGenre === "All" ? "active" : ""}`}
                                onClick={() => setSelectedGenre("All")}
                            >
                                All
                            </button>
                        ) : (
                            <button
                                key={genre.id}
                                className={`genre-button ${selectedGenre === genre.id ? "active" : ""}`}
                                onClick={() => setSelectedGenre(genre.id)}
                            >
                                {genre.name}
                            </button>
                        )
                    )}
                </div>
            </div>

            {searchTerm || selectedGenre !== "All" ? (
                <div className="movies-grid">
                    <div className="topics_list single">
                        <div className="category-header">
                            <div className="category-left">
                                {/*<h2 className="category-title">{cat.category.name}</h2>*/}
                                {/*<a className="view-all" href={`/category/${cat.category.id}`}>Xem toàn bộ </a>*/}
                            </div>

                            <div className="movie-card-container">
                                {filteredMovies.length > 0 ? (
                                    filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
                                ) : (
                                    <div className="no-results"><p>No movies found...</p></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="movies-grid">
                    {categories.map((cat) => (
                        <div className="topics_list single">
                            <div className="category-header">
                                <div className="category-left">
                                <h2 className="category-title">{cat.category.name}</h2>
                                    <a className="view-all" href={`/category/${cat.category.id}`}>View all </a>
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
