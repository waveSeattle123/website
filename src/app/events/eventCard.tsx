"use client";
import React from 'react';
import Image from 'next/image';

interface EventCardProps {
  name: string;
  description: string;
  imagePath: string;
  impact?: string;
  date?: string;  
}

export default function EventCard({ name, description, imagePath, impact, date }: EventCardProps) {

  const getImpactFontSize = (text?: string) => {
    if (!text) return "text-2xl";
    if (text.length < 20) return "text-2xl";
    if (text.length < 40) return "text-xl";
    if (text.length < 60) return "text-lg";
    return "text-base";
  };

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-black/60 rounded-xl overflow-hidden hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/30 border-2 border-blue-400/70 h-full shadow-md shadow-blue-500/20 flex flex-col">
        <div className="relative h-72 overflow-hidden">
          <Image 
            src={imagePath} 
            alt={name} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div>
            <h3 className="text-3xl title-font text-white mb-2">{name}</h3>
            
            {date && (
              <p className="text-xl subtitle-font text-blue-300 mb-4">{date}</p>
            )}
            
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-3"></div>
            <p className="text-white text-lg mb-4">
              {description}
            </p>
          </div>
          
          <div className="flex-grow"></div>
          
          {impact && (
            <div className="mt-4 p-3 bg-blue-900/40 rounded-lg border border-blue-400/30 text-center animate-pulse-glow h-16 flex items-center justify-center">
              <p className={`text-blue-300 ${getImpactFontSize(impact)} font-bold`}>
                {impact}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}