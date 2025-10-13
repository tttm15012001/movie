"use client"

import { useState } from "react"
import "../styles/PreviewPage.css"

export default function PreviewPage() {
    const [activeTab, setActiveTab] = useState("episodes")
    const [selectedServer, setSelectedServer] = useState("server1")

    const movieData = {
        title: "Gia Đình Bảo Tổ",
        originalTitle: "Original Title",
        year: "2024",
        rating: "8.8",
        totalRatings: "1.2K",
        duration: "45 phút/tập",
        genres: ["Hài", "Gia Đình", "Tâm Lý"],
        country: "Việt Nam",
        director: "Nguyễn Minh Chung",
        cast: ["Trấn Thành", "Lê Giang", "Tuấn Trần", "NSND Hồng Vân", "Lê Dương Bảo Lâm", "Vinh Râu"],
        description:
            "Câu chuyện xoay quanh gia đình Bảo Tổ với những tình huống hài hước và đầy cảm động trong cuộc sống hàng ngày.",
        episodes: 21,
        status: "Đang chiếu",
    }

    const comments = [
        {
            id: 1,
            user: "nguyenvana",
            avatar: "/diverse-user-avatars.png",
            time: "2 giờ trước",
            content: "Phim hay quá, cả nhà mình đều thích xem!",
            likes: 15,
            replies: 3,
        },
        {
            id: 2,
            user: "tranthib",
            avatar: "/diverse-user-avatar-set-2.png",
            time: "5 giờ trước",
            content: "Diễn xuất của các diễn viên rất tự nhiên và chân thật",
            likes: 8,
            replies: 1,
        },
        {
            id: 3,
            user: "lethic",
            avatar: "/diverse-user-avatars-3.png",
            time: "1 ngày trước",
            content: "Mong chờ tập tiếp theo, kịch bản viết rất hay!",
            likes: 23,
            replies: 5,
        },
    ]

    return (
        <div className="movie-preview-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <img src="/banners/gia_dinh_bao_to.png" alt="Hero background" className="hero-image" />
            </div>

            {/* Main Content */}
            <div className="main-content">
                <div className="content-wrapper">
                    {/* Left Sidebar */}
                    <aside className="left-sidebar">
                        <div className="movie-poster">
                            <img src="/thumbnail/gia_dinh_bao_to.png" alt={movieData.title} />
                            <div className="poster-overlay">
                                <span className="episode-badge">Tập {movieData.episodes}</span>
                            </div>
                        </div>

                        <h2 className="movie-title">{movieData.title}</h2>

                        <div className="movie-meta">
              <span className="rating">
                <span className="rating-number">{movieData.rating}</span>
                <span className="rating-total">/{movieData.totalRatings}</span>
              </span>
                            <span className="year">{movieData.year}</span>
                            <span className="duration">{movieData.duration}</span>
                        </div>

                        <div className="genre-tags">
                            {movieData.genres.map((genre, index) => (
                                <span key={index} className="genre-tag">
                  {genre}
                </span>
                            ))}
                        </div>

                        <div className="movie-info">
                            <div className="info-item">
                                <span className="info-label">Trạng thái:</span>
                                <span className="info-value">{movieData.status}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Đạo diễn:</span>
                                <span className="info-value">{movieData.director}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Quốc gia:</span>
                                <span className="info-value">{movieData.country}</span>
                            </div>
                        </div>

                        {/* Cast Section */}
                        <div className="cast-section">
                            <h3 className="section-title">Diễn viên</h3>
                            <div className="cast-grid">
                                {movieData.cast.map((actor, index) => (
                                    <div key={index} className="cast-member">
                                        <img
                                            src={`/actor-.jpg?height=60&width=60&query=actor+${index}`}
                                            alt={actor}
                                            className="cast-avatar"
                                        />
                                        <span className="cast-name">{actor}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="main-area">
                        {/* Action Buttons */}
                        <div className="action-buttons">
                            <button className="btn-primary">
                                <span className="play-icon">▶</span>
                                Xem Ngay
                            </button>
                            <button className="btn-icon" title="Yêu thích">
                                <span>♥</span>
                            </button>
                            <button className="btn-icon" title="Thêm vào danh sách">
                                <span>+</span>
                            </button>
                            <button className="btn-icon" title="Chia sẻ">
                                <span>⤴</span>
                            </button>
                            <button className="btn-icon" title="Tải xuống">
                                <span>⬇</span>
                            </button>
                        </div>

                        {/* Ad Banner */}
                        <div className="ad-banner">
                            <div className="ad-content">QUẢNG CÁO</div>
                        </div>

                        {/* Tabs */}
                        <div className="tabs-container">
                            <div className="tabs">
                                <button
                                    className={`tab ${activeTab === "episodes" ? "active" : ""}`}
                                    onClick={() => setActiveTab("episodes")}
                                >
                                    Tập phim
                                </button>
                                <button className={`tab ${activeTab === "info" ? "active" : ""}`} onClick={() => setActiveTab("info")}>
                                    Giới thiệu
                                </button>
                                <button
                                    className={`tab ${activeTab === "comments" ? "active" : ""}`}
                                    onClick={() => setActiveTab("comments")}
                                >
                                    Bình luận
                                </button>
                                <button
                                    className={`tab ${activeTab === "collection" ? "active" : ""}`}
                                    onClick={() => setActiveTab("collection")}
                                >
                                    Bộ sưu tập
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="tab-content">
                                {activeTab === "episodes" && (
                                    <div className="episodes-content">
                                        <div className="server-selector">
                                            <span className="server-label">Phần 1</span>
                                            <select
                                                value={selectedServer}
                                                onChange={(e) => setSelectedServer(e.target.value)}
                                                className="server-dropdown"
                                            >
                                                <option value="server1">SV 01</option>
                                                <option value="server2">SV 02</option>
                                                <option value="server3">SV 03</option>
                                            </select>
                                        </div>

                                        <div className="episodes-grid">
                                            {Array.from({ length: movieData.episodes }, (_, i) => (
                                                <button key={i} className="episode-btn">
                                                    Tập {i + 1}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="rating-section">
                                            <h4>Đánh Giá ({movieData.totalRatings})</h4>
                                            <div className="rating-display">
                                                <span className="rating-score">{movieData.rating}</span>
                                                <span className="rating-stars">★★★★★</span>
                                            </div>
                                            <p className="rating-prompt">Vui lòng đăng nhập để đánh giá phim</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "info" && (
                                    <div className="info-content">
                                        <h3>Giới thiệu</h3>
                                        <p>{movieData.description}</p>
                                    </div>
                                )}

                                {activeTab === "comments" && (
                                    <div className="comments-content">
                                        <div className="comments-header">
                                            <h3>Bình luận</h3>
                                            <span className="comment-count">{comments.length} bình luận</span>
                                        </div>

                                        <div className="comment-input">
                                            <img src="/current-user.jpg" alt="Your avatar" className="comment-avatar" />
                                            <input type="text" placeholder="Viết bình luận..." className="comment-field" />
                                        </div>

                                        <div className="comments-list">
                                            {comments.map((comment) => (
                                                <div key={comment.id} className="comment-item">
                                                    <img
                                                        src={comment.avatar || "/placeholder.svg"}
                                                        alt={comment.user}
                                                        className="comment-avatar"
                                                    />
                                                    <div className="comment-content">
                                                        <div className="comment-header">
                                                            <span className="comment-user">{comment.user}</span>
                                                            <span className="comment-time">{comment.time}</span>
                                                        </div>
                                                        <p className="comment-text">{comment.content}</p>
                                                        <div className="comment-actions">
                                                            <button className="comment-action">
                                                                <span>👍</span> {comment.likes}
                                                            </button>
                                                            <button className="comment-action">Trả lời ({comment.replies})</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "collection" && (
                                    <div className="collection-content">
                                        <p>Chưa có bộ sưu tập nào</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
