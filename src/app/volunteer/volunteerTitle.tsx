"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function VolunteerTitle() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="w-full pt-20">
      <div className="mx-4 mb-4"> 
        <div className="bg-black/80 rounded-xl flex flex-col h-[calc(100vh-6rem)]">
          <div className="p-6">
            <h1 className="text-4xl md:text-9xl title-font title-color text-left">Volunteer</h1>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"></div>
          </div>
          
          <div className="flex flex-col md:flex-row h-full p-4">
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image 
                  src="/volunteer/volunteer_1.jpg" 
                  alt="Wave Seattle Team" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <div className="bg-black/50 rounded-lg p-6 w-full h-full flex flex-col justify-center">
                <h3 className="text-center text-xl md:text-5xl text-blue-400 mb-2 subtitle-font">Get Involved</h3>
                
                <p className="text-white text-lg mt-8 text-center">
                    Join our team of dedicated high schoolers and make a difference in our local community - volunteering includes anything from event setup to pre-event planning. Use the link below to sign up for a volunteering opportunity and help support our cause!
                </p>
               
                <div className="flex flex-col items-center gap-6 mt-10">
                  <button
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group border border-blue-400 rounded-lg px-6 py-3 animate-pulse-glow"
                    onClick={openPopup}
                  >
                    <span className="text-xl mr-2 subtitle-font">Learn More About Volunteer Applications</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closePopup}
        >
          <div 
            className="bg-black/90 rounded-xl border border-blue-400/50 p-8 max-w-3xl w-full mx-4 shadow-lg shadow-blue-500/20 transform transition-all duration-300 animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl title-font text-blue-400">Volunteer Application Process</h3>
              <button 
                onClick={closePopup} 
                className="text-white hover:text-blue-400 transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mb-6"></div>
            
            <div className="text-white space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center subtitle-font flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl text-blue-300 subtitle-font mb-2">Submit Application</h4>
                  <p className="text-gray-200">Fill out the online volunteer application form (below)! Provide necessary information and details about your experience and fill out all the essay questions to the best of your ability.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center subtitle-font flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl text-blue-300 subtitle-font mb-2">Application Review + Reference Check</h4>
                  <p className="text-gray-200">Our team will carefully review your application and may contact the provided references to learn more about your background.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center subtitle-font flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl text-blue-300 subtitle-font mb-2">Orientation Session + Training</h4>
                  <p className="text-gray-200">Attend an orientation session to understand our organization's mission and values. Participate in any necessary training sessions.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center subtitle-font flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl text-blue-300 subtitle-font mb-2">Onboarding Process</h4>
                  <p className="text-gray-200">Complete necessary paperwork and documentation. Get acquainted with our team and organizational processes.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScegl8nNWzkw-LE1Py4JNpfjLYq3Toj4NaBBxOKucG1w-vZ6A/closedform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group px-6 py-3 border border-blue-400 rounded-lg"
              >
                <span className="text-xl subtitle-font">Apply Now</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}