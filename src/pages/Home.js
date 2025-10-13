"use client"

import { useState } from "react"
import MovieCard from "../components/MovieCard"
import { movies } from "../data/movies"

function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("All")

    const genres = ["All", ...new Set(movies.map((movie) => movie.genre))]

    const filteredMovies = movies.filter((movie) => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre
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

            <div className="movies-grid">
                <div className="topics_list single">
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

            {filteredMovies.length === 0 && (
                <div className="no-results">
                    <p>No movies found. Try a different search or filter.</p>
                </div>
            )}
        </div>
    )
}

export default Home
