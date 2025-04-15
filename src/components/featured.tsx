"use state";
import React from 'react';
import Image from 'next/image';

export default function Featured() {
  return (
    <div className="w-95% py-4 px-2 mr-4">
      <div className="max-w-full mx-auto">

        <div className="bg-black/60 rounded-xl p-5 flex flex-col md:flex-row gap-4 hover:bg-black/90 transition-all">
          <div className="w-full md:w-1/3 h-85 relative rounded-xl overflow-hidden">
            <Image
              src="/waveLogo.png"
              alt="Summer Wellness Workshop"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col justify-between ml-3 h-full">
            <div>
              <h3 className="text-3xl title-font text-white mb-3">Upcoming Event: Coming Soon</h3>
              <p className="text-xl subtitle-font text-blue-300 mb-4">Date • To Be Determined</p>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-4"></div>
            </div>

            <div className="flex flex-col justify-center flex-grow my-4">
              <p className="text-base text-white text-xl leading-relaxed text-center">
                Our next event is being planned out and is in the works right now.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <a
                href="/events"
                className="inline-flex items-center text-white text-xl subtitle-font group transition-all duration-300 hover:text-blue-300"
              >
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">Check out our events</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}