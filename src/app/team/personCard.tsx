"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface PersonCardProps {
  name: string;
  role: string;
  imagePath: string;
  roleInfo: string;
}

export default function PersonCard({ name, role, imagePath, roleInfo }: PersonCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="w-1/3 p-4">
        <div 
          className="bg-black/60 rounded-xl hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/30 group border border-blue-400/30 p-6 flex flex-col items-center h-full cursor-pointer"
          onClick={openModal}
        >
          <div className="relative w-56 h-56 mb-6">
            <Image 
              src={imagePath} 
              alt={name} 
              fill
              className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          <div className="text-center mt-2">
            <h3 className="text-3xl title-font text-white mb-3">{name}</h3>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-3"></div>
            <p className="text-blue-400 text-xl subtitle-font">{role}</p>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-black/90 rounded-xl border border-blue-400/50 p-8 max-w-2xl w-full mx-4 shadow-lg shadow-blue-500/20 transform transition-all duration-300 animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <div className="relative w-20 h-20 mr-4">
                  <Image 
                    src={imagePath} 
                    alt={name} 
                    fill
                    className="object-cover rounded-full" 
                  />
                </div>
                <div>
                  <h3 className="text-3xl title-font text-white">{name}</h3>
                  <p className="text-blue-400 text-xl subtitle-font">{role}</p>
                </div>
              </div>
              <button 
                onClick={closeModal} 
                className="text-white hover:text-blue-400 transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mb-6"></div>
            <div className="text-white text-lg">
              <p>{roleInfo}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}