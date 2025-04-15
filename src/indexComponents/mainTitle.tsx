"use client";
import Image from 'next/image';
import Featured from '../components/featured';

export default function MainTitle() {
  return (
    <div className="relative min-h-screen w-full font-[Helvetica,Arial,sans-serif]">
        <div className="absolute m-4 inset-0 bg-black/80 rounded-xl">
          <h1 className="text-9xl title-font title-color text-white p-8 pb-2">
            <span className="inline-flex">
              <span className="inline-block animate-wave-letter" style={{ animationDelay: "0ms" }}>W</span>
              <span className="inline-block animate-wave-letter" style={{ animationDelay: "100ms" }}>A</span>
              <span className="inline-block animate-wave-letter" style={{ animationDelay: "200ms" }}>V</span>
              <span className="inline-block animate-wave-letter" style={{ animationDelay: "300ms" }}>E</span>
            </span>{" "}
            <span className="inline-block">Seattle</span>
          </h1>
          <h2 className="text-4xl subtitle-font title-color text-white pl-24 mt-1">
            Wellness, Awareness, Vision, Empowerment
          </h2>
          
          <div className="absolute top-8 right-8 flex flex-row items-center space-x-6">
            <Image 
              src="/schLogo.png" 
              alt="SCH Logo" 
              width={120} 
              height={120}
              className="object-contain rounded-xl"
            />
            <Image 
              src="/waveLogo.png" 
              alt="Wave Logo" 
              width={120} 
              height={120}
              className="object-contain rounded-xl"
            />
          </div>
          
          <div className="absolute bottom-6 right-8">
            <a 
              href="#navigation" 
              className="flex items-center text-white text-3xl group transition-all duration-300 hover:text-blue-300 subtitle-font animate-bounce-subtle"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
            >
              <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">Explore more!</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="absolute bottom-15 left-2 w-full">
            <Featured />
          </div>
          </div>
        </div>
  );
}

// About us
// Events
// Donate
// Meet the team
// Volunteer
// Contact



