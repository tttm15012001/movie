import { Card } from "../ui/card"

const castMembers = [
    { name: "Trấn Thành", role: "Bảo Tổ", image: "/vietnamese-actor.jpg" },
    { name: "Lan Ngọc", role: "Bà Hoa", image: "/vietnamese-actress.jpg" },
    { name: "Tuấn Trần", role: "Bảo Minh", image: "/young-vietnamese-actor.jpg" },
    { name: "Kaity Nguyễn", role: "Bảo Ngọc", image: "/young-vietnamese-actress.jpg" },
    { name: "Hoài Linh", role: "Ông nội", image: "/vietnamese-actor-2.jpg" },
    { name: "Việt Hương", role: "Bà nội", image: "/vietnamese-actress-2.jpg" },
]

export default function CastSection() {
    return (
        <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Diễn viên</h2>
            <div className="grid grid-cols-3 gap-4">
                {castMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="w-full aspect-square rounded-full overflow-hidden mb-2 bg-secondary">
                            <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-sm font-medium text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                ))}
            </div>
        </Card>
    )
}
