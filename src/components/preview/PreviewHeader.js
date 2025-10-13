import { Search, Bell, User } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function PreviewHeader() {
    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">R</span>
                            </div>
                            <span className="text-xl font-bold text-foreground">RoPhim</span>
                        </a>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                                Phim lẻ
                            </a>
                            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                                Phim bộ
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Thể loại
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Quốc gia
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Năm phát hành
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Thêm
                            </a>
                        </nav>
                    </div>

                    {/* Search and Actions */}
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Tìm kiếm phim, diễn viên..." className="pl-10 w-64 bg-secondary border-border" />
                        </div>
                        <Button variant="ghost" size="icon">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Button variant="default" size="sm" className="gap-2">
                            <User className="w-4 h-4" />
                            <span className="hidden md:inline">Đăng nhập</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
