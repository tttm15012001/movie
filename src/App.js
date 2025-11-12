import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieView from "./pages/MovieView"
import "./App.css"
import PreviewPage from "./pages/PreviewPage";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/preview/:movieId" element={<PreviewPage />} />
                    <Route path="/movie/:tag" element={<MovieView />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
