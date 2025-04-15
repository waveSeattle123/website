import Image from 'next/image';
import Navbar from '../../components/navbar';
import React from 'react';

export default function Donate() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image 
          src="/donate/donate_2.jpeg" 
          alt="Donate Background" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"/>
      </div>
      
      <Navbar />
      
      <div className="relative z-10 w-full pt-20">
        <div className="mx-4 mb-4">
          <div className="bg-black/80 rounded-xl flex flex-col h-[calc(100vh-6rem)]">
            <div className="p-6">
              <h1 className="text-4xl md:text-9xl title-font title-color text-left">Donate</h1>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"></div>
            </div>
            
            <div className="flex flex-col md:flex-row h-full p-4">
              <div className="md:w-1/2 p-4 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image 
                    src="/donate/donate_1.jpeg" 
                    alt="Support Wave Seattle" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-4 flex items-center justify-center text-center">
                <div className="bg-black/50 rounded-lg p-6 w-full h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl font-bold mb-6 text-blue-400 subtitle-font">Why Your Support Matters</h2>
                    
                    <p className="text-white mb-4 text-lg">
                      Your donation directly supports Wave Seattle's efforts to raise funds for Seattle Children's Hospital uncompensated care fund. Every contribution helps ensure that children receive the medical care they need regardless of their family's ability to pay.
                    </p>
                    
                    <div className="text-center mb-6">
                      <p className="text-blue-400 text-3xl subtitle-font mb-2">Other Ways to Support</p>
                      <ul className="list-disc list-inside text-white text-lg">
                        <li>Spread the word about our mission</li>
                        <li>Volunteer at our events</li>
                        <li>Participate in fundraising activities</li>
                      </ul>
                    </div>

                    <p className="text-2xl subtitle-font font-bold text-blue-400">100% of donations go to Seattle Children's Hospital</p>
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href="https://give.seattlechildrens.org/fundraiser/5028615" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-3 text-3xl font-bold text-blue-400 hover:text-blue-300 transition-all group animate-pulse-glow px-6 py-3 rounded-lg"
                    >
                      Make Your Donation Today
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="transition-transform group-hover:translate-x-2"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}