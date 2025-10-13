import { Play, Heart, Share2, Bookmark, Flag } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export default function MovieHero() {
    return (
        <div className="movie-hero relative">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/family-gathering-around-table.jpg"
                    alt="Movie backdrop"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Poster */}
                    <div className="flex-shrink-0">
                        <div className="relative w-48 h-72 rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="/vietnamese-family-movie-poster.jpg"
                                alt="Gia Đình Bảo Tổ"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2">
                                <Badge className="bg-red-600 text-white border-0">HD</Badge>
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-foreground mb-4">Gia Đình Bảo Tổ</h1>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400 text-2xl">★</span>
                                <span className="text-xl font-bold text-foreground">8.5</span>
                                <span className="text-sm text-muted-foreground">/10</span>
                            </div>
                            <Badge variant="outline" className="border-primary text-primary">
                                2024
                            </Badge>
                            <Badge variant="outline">Hài</Badge>
                            <Badge variant="outline">Gia đình</Badge>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6 text-sm text-muted-foreground">
                            <span>Thời lượng: 105 phút</span>
                            <span>•</span>
                            <span>Quốc gia: Việt Nam</span>
                            <span>•</span>
                            <span>Đạo diễn: Nguyễn Hữu Tuấn</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                                <Play className="w-5 h-5" fill="currentColor" />
                                Xem Ngay
                            </Button>
                            <Button size="lg" variant="secondary" className="gap-2">
                                <Heart className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="secondary" className="gap-2">
                                <Bookmark className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="secondary" className="gap-2">
                                <Share2 className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="secondary" className="gap-2">
                                <Flag className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
