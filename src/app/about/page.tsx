import Navbar from "../../components/navbar";
import ValueCard from './valueCard';
import AboutTitle from "./aboutTitle";
import Image from "next/image";

export default function About() {
    return (
        <div className="relative min-h-screen">
            <Navbar />
            <div className="fixed inset-0 z-0">
                <Image 
                    src="/about/about_1.png" 
                    alt="About Background" 
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 pt-">
                <AboutTitle />
                <div className="flex flex-col items-center">
                    <ValueCard 
                        value="Wellness" 
                        information="With a steadfast commitment to wellnes, we strive to enhance the overall well-being of the children and the families we serve. By providing funding and initiative to child healthcare, we pave the way for a brighter future for the next generations of young minds." 
                        imagePosition="right" 
                        imagePath="/about/wellness.jpeg" 
                    />
                    <ValueCard 
                        value="Awareness" 
                        information="Through diligent awareness initiatives, our goal is to educate and engage the community regarding the significance of uncompensated care and its profound impact on the lives of children. Through our fundraising events, we bring awareness to our mission and cause, involving the community in our efforts." 
                        imagePosition="left" 
                        imagePath="/about/awareness.png" 
                    />
                    <ValueCard 
                        value="Vision" 
                        information="Fueled by vision, we aspire to forge a future where every child can access essential care, regardless of their financial circumstances. We believe that every child, regardless of their background, should have the opportunity to receive the care they need. By providing care for the next generation, we ensure the growth and development of our communities." 
                        imagePosition="right" 
                        imagePath="/about/vision.jpeg" 
                    />
                    <ValueCard 
                        value="Empowerment" 
                        information="Empowerment lies at the heart of our mission as we work diligently to equip families and children with the tools to navigate challenges and find hope amidst adversity. So many kids are told they can't do something or that their dreams are impossible, but we provide them with the resources to continue their dreams through the adversity and harsh times they may face." 
                        imagePosition="left" 
                        imagePath="/about/empowerment.jpg" 
                    />
                </div>
            </div>
        </div>
    );
}
