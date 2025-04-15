import Navbar from "@/components/navbar";
import Image from 'next/image';
import VolunteerTitle from "./volunteerTitle";

export default function Team() {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
                <Image
                    src="/volunteer/volunteer_2.JPG"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10">
                <Navbar />
                <VolunteerTitle />
            </div>
        </div>
    )
}