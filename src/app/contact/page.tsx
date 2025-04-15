import Image from 'next/image';
import Navbar from '../../components/navbar';
import React from 'react';

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image 
          src="/waveLogo.png" 
          alt="Contact Background" 
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
              <h1 className="text-4xl md:text-9xl title-font title-color text-left">Contact</h1>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"></div>
            </div>
            
            <div className="flex flex-col md:flex-row h-full p-4">
              <div className="md:w-1/2 p-4 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image 
                    src="/waveLogo.png" 
                    alt="Contact Wave Seattle" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-4 flex items-center justify-center">
                <div className="bg-black/50 rounded-lg p-8 w-full h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl font-bold mb-6 text-blue-400 subtitle-font">Get in Touch</h2>
                    
                    <p className="text-white mb-8 text-lg">
                      Have questions about our events, volunteering opportunities, or want to support our mission? We'd love to hear from you!
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-400/20 p-3 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-400" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl text-blue-300 subtitle-font">Email</h3>
                          <a href="mailto:wave.seattle.123@gmail.com" className="text-white hover:text-blue-300 transition-colors">wave.seattle.123@gmail.com</a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-400/20 p-3 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-400" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003z"/>
                            <path d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 6.775a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334z"/>
                            <path d="M13.07 3.82a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl text-blue-300 subtitle-font">Instagram</h3>
                          <a href="https://instagram.com/wave_seattle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">@wave_seattle</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mb-6"></div>
                    <p className="text-white text-center">
                      Follow us on social media to stay updated with our latest events and initiatives!
                    </p>
                    <div className="flex justify-center space-x-6 mt-4 flex-wrap">
                      <a href="https://facebook.com/waveseattle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/wave-seattle-a61983295/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                      <a href="https://tiktok.com/@wave_seattle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0z"/>
                        </svg>
                      </a>
                      <a href="https://x.com/Wave_Seattle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                        </svg>
                      </a>
                      <a href="https://github.com/wave-seattle/website" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                      <a href="https://linktr.ee/wave_seattle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                          <path d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"/>
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
    </div>
  );
}