import TeamTitle from "./teamTitle"
import Navbar from "@/components/navbar";
import Image from 'next/image';
import ExecBoard from "./execBoard";
import AdminBoard from "./adminBoard";

export default function Team() {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
                <Image
                    src="/team/team_2.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10">
                <Navbar />
                <TeamTitle />
                <ExecBoard />
                <AdminBoard />
            </div>
        </div>
    )
}