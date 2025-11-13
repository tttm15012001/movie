import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"
import PreviewPage from "./pages/PreviewPage";
import WatchPage from "./pages/WatchPage";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/preview/:movieId" element={<PreviewPage />} />
                    <Route path="/movie/view/:movieId" element={<WatchPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
