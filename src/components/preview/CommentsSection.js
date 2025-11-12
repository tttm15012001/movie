"use client"

import { useState } from "react"
import { ThumbsUp, MessageCircle } from "lucide-react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Avatar } from "../ui/avatar"

const comments = [
    {
        id: 1,
        user: "Nguyễn Văn A",
        avatar: "/user-avatar-1.png",
        time: "2 giờ trước",
        content: "Phim hay quá! Cả nhà cười không ngớt từ đầu đến cuối. Diễn xuất của Trấn Thành rất tự nhiên.",
        likes: 24,
        replies: 3,
    },
    {
        id: 2,
        user: "Trần Thị B",
        avatar: "/placeholder-user.jpg",
        time: "5 giờ trước",
        content: "Nội dung gần gũi với cuộc sống, xem mà thấy như gia đình mình vậy 😂",
        likes: 18,
        replies: 1,
    },
    {
        id: 3,
        user: "Lê Minh C",
        avatar: "/current-user.jpg",
        time: "1 ngày trước",
        content: "Phim Việt ngày càng chất lượng. Ủng hộ ekip!",
        likes: 45,
        replies: 7,
    },
]

export default function CommentsSection() {
    const [showAll, setShowAll] = useState(false)
    const displayedComments = showAll ? comments : comments.slice(0, 2)

    return (
        <Card className="p-6 bg-card border-border mt-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Bình luận ({comments.length})</h2>
                <Button variant="outline" size="sm">
                    Mới nhất
                </Button>
            </div>

            <div className="space-y-6">
                {displayedComments.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                        <Avatar className="w-10 h-10 flex-shrink-0">
                            <img
                                src={comment.avatar || "/placeholder.svg"}
                                alt={comment.user}
                                className="w-full h-full object-cover"
                            />
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-foreground text-sm">{comment.user}</span>
                                <span className="text-xs text-muted-foreground">{comment.time}</span>
                            </div>
                            <p className="text-sm text-foreground mb-3 leading-relaxed">{comment.content}</p>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                                    <ThumbsUp className="w-4 h-4" />
                                    <span>{comment.likes}</span>
                                </button>
                                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Trả lời</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!showAll && comments.length > 2 && (
                <Button variant="ghost" className="w-full mt-4" onClick={() => setShowAll(true)}>
                    Xem thêm bình luận
                </Button>
            )}
        </Card>
    )
}
