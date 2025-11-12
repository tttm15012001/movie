"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

export default function MovieInfo() {
    const [activeTab, setActiveTab] = useState("intro")

    return (
        <Card className="p-6 bg-card border-border">
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-border">
                <Button
                    variant={activeTab === "intro" ? "default" : "ghost"}
                    onClick={() => setActiveTab("intro")}
                    className="rounded-b-none"
                >
                    Giới thiệu
                </Button>
                <Button
                    variant={activeTab === "content" ? "default" : "ghost"}
                    onClick={() => setActiveTab("content")}
                    className="rounded-b-none"
                >
                    Nội dung
                </Button>
                <Button
                    variant={activeTab === "cast" ? "default" : "ghost"}
                    onClick={() => setActiveTab("cast")}
                    className="rounded-b-none"
                >
                    Diễn viên
                </Button>
            </div>

            {/* Content */}
            {activeTab === "intro" && (
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Giới thiệu</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Câu chuyện xoay quanh gia đình ông Bảo Tổ - một người đàn ông trung niên với tính cách hài hước và đôi khi
                            hơi ngốc nghếch. Phim kể về những tình huống dở khóc dở cười trong cuộc sống hàng ngày của gia đình, từ
                            việc nuôi dạy con cái đến những mâu thuẫn nhỏ nhặt giữa các thành viên.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Nội dung</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Phim mang đến những tiếng cười sảng khoái qua cách kể chuyện gần gũi, chân thực về cuộc sống gia đình Việt
                            Nam hiện đại. Với sự tham gia của dàn diễn viên tài năng, bộ phim hứa hẹn sẽ mang đến những phút giây giải
                            trí tuyệt vời cho cả gia đình.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div>
                            <span className="text-sm text-muted-foreground">Đạo diễn:</span>
                            <p className="text-foreground">Nguyễn Hữu Tuấn</p>
                        </div>
                        <div>
                            <span className="text-sm text-muted-foreground">Biên kịch:</span>
                            <p className="text-foreground">Trần Minh Hoàng</p>
                        </div>
                        <div>
                            <span className="text-sm text-muted-foreground">Nhà sản xuất:</span>
                            <p className="text-foreground">VTV Production</p>
                        </div>
                        <div>
                            <span className="text-sm text-muted-foreground">Âm nhạc:</span>
                            <p className="text-foreground">Lưu Hà An</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "content" && (
                <div className="text-muted-foreground">
                    <p className="leading-relaxed">
                        Gia đình ông Bảo Tổ gồm có vợ - bà Hoa, một người phụ nữ hiền lành nhưng đôi khi cũng rất quyết đoán, và hai
                        đứa con: Bảo Minh - cậu con trai lớn đang tuổi dậy thì đầy bướng bỉnh, và Bảo Ngọc - cô con gái nhỏ thông
                        minh và đáng yêu.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Mỗi ngày trôi qua đều là một cuộc phiêu lưu mới với vô vàn tình huống hài hước. Từ việc ông Bảo Tổ cố gắng
                        làm bạn với con trai nhưng lại gặp phải khoảng cách thế hệ, đến những lần bà Hoa phải "dẹp loạn" khi cả nhà
                        rối tung lên vì những trò nghịch ngợm của các con.
                    </p>
                </div>
            )}

            {activeTab === "cast" && (
                <div className="text-muted-foreground">
                    <p>Thông tin về dàn diễn viên sẽ được cập nhật sớm...</p>
                </div>
            )}
        </Card>
    )
}
