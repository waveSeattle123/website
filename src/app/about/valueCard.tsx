import React from 'react';
import Image from 'next/image';

interface ValueCardProps {
  value: string;
  information: string;
  imagePosition: 'left' | 'right';
  imagePath: string;
}

export default function ValueCard({ value, information, imagePosition, imagePath }: ValueCardProps) {
  return (
    <div className="w-full py-2">
      <div className="mx-4 mb-1">
        <div className="bg-black/90 rounded-xl overflow-hidden">
          <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[400px]`}>
            <div className="md:w-1/2 p-4">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image 
                  src={imagePath} 
                  alt={`${value} illustration`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 flex flex-col">
              <h3 className="text-3xl md:text-7xl text-blue-400 mb-4 subtitle-font">{value}</h3>
              <div className="h-0.5 w-1/3 bg-gradient-to-r from-blue-400 to-transparent mb-6"></div>
              <p className="text-white text-xl">
                {information}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}