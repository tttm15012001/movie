export default function PreviewFooter() {
    return (
        <footer className="bg-card border-t border-border mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">R</span>
                            </div>
                            <span className="text-xl font-bold text-foreground">RoPhim</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Nền tảng xem phim trực tuyến hàng đầu Việt Nam</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Danh mục</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Phim lẻ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Phim bộ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Thể loại
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Quốc gia
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Hỗ trợ</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Liên hệ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Câu hỏi thường gặp
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Điều khoản
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Chính sách
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Kết nối</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 RoPhim. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    )
}
