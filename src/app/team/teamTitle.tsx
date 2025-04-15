"use client";
import React from 'react';
import Image from 'next/image';

export default function TeamTitle() {
  return (
    <div className="w-full pt-20">
      <div className="mx-4 mb-4"> 
        <div className="bg-black/80 rounded-xl flex flex-col h-[calc(100vh-6rem)]">
          <div className="p-6">
            <h1 className="text-4xl md:text-9xl title-font title-color text-left">Our Team</h1>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"></div>
          </div>
          
          <div className="flex flex-col md:flex-row h-full p-4">
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image 
                  src="/team/team_1.JPG" 
                  alt="Wave Seattle Team" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <div className="bg-black/50 rounded-lg p-6 w-full h-full flex flex-col justify-center">
                <h3 className="text-center text-xl md:text-5xl text-blue-400 mb-4 subtitle-font">Meet Our Team</h3>
                <p className="text-white text-lg mt-8 text-center">
                  The WAVE Seattle Team consists of student body members dedicated to our mission to provide uncompsenated care and funding to children. Each one of us is deeply interested and involved in our organization, and our passion for helping our community drives us to make a difference.
                </p>
                <p className="text-white text-lg mt-10 text-center">
                  Each team member plays a vital role in organizing events, raising funds, and building community awareness. Together, we work to embody our core values of Wellness, Awareness, Vision, and Empowerment.
                </p>
                
                <div className="flex justify-center mt-8">
                  <button
                    className="flex items-center text-white hover:text-blue-300 transition-colors group"
                    onClick={() => {
                      window.scrollTo({
                        top: window.scrollY + window.innerHeight,
                        behavior: 'smooth'
                      });
                    }}
                  >
                    <span className="text-2xl mr-2 subtitle-font">Meet our team members</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 transform group-hover:translate-y-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}