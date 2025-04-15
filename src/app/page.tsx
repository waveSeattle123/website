import MainTitle from "../indexComponents/mainTitle";
import Navigation from "../indexComponents/navigation";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image 
          src="/home/home_2.jpg" 
          alt="Background" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"/>
      </div>
      <div className="relative z-10">
        <MainTitle />
        <Navigation />
      </div>
    </div>
  );
}
