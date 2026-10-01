import React from "react";
import catGlasses from "../../../assets/brownGlasses.webp"; 
import catVrGlasses from "../../../assets/metaVR.webp";
import catQuest from "../../../assets/quest.webp";
import catMuse from "../../../assets/muse.webp";

import lisaGlasses from "../../../assets/lisaGlasses.webp"; 
import standardGlasses from "../../../assets/standardGlasses.webp";
import raybanDark from "../../../assets/raybanMeta.webp";
import raybanAudio from "../../../assets/raybanAudio.webp";
import museCharmImg from "../../../assets/museCharmImg.webp";
import oakleyMetaImg from "../../../assets/oakleyMetaImg.webp";
import raybanDisplayImg from "../../../assets/raybanDisplayImg.webp";
import quest3sImg from "../../../assets/quest3sImg.webp";

const StoreGrid = () => {
  return (
    <section className="w-full bg-white py-16 px-6 flex flex-col items-center">
      <div className="max-w-300 w-full mx-auto flex flex-col items-center">
        
        
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-12 text-center">
          Shop devices, accessories and more from the Meta Store
        </h2>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full">
          
        
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition cursor-pointer group shadow-sm">
            <div className="w-24 h-16 flex items-center justify-center mb-4">
              <img src={catGlasses} alt="AI glasses" className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">AI glasses</span>
          </div>

          
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition cursor-pointer group shadow-sm">
            <div className="w-24 h-16 flex items-center justify-center mb-4">
              <img src={catVrGlasses} alt="Meta VR Glasses" className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">Meta VR Glasses</span>
          </div>

         
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition cursor-pointer group shadow-sm">
            <div className="w-24 h-16 flex items-center justify-center mb-4">
              <img src={catQuest} alt="Meta Quest" className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">Meta Quest</span>
          </div>

         
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition cursor-pointer group shadow-sm">
            <div className="w-24 h-16 flex items-center justify-center mb-4">
              <img src={catMuse} alt="Muse Charm" className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">Muse Charm</span>
          </div>

        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          
          <div className="relative h-112.5 md:h-125 rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex flex-col justify-end p-8 shadow-md">
            <img 
              src={lisaGlasses} 
              alt="Meta Glasses by LISA" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col items-center text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Meta Glasses by LISA</h3>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition shadow">
                  Shop
                </button>
                <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          
          <div className="relative h-112.5 md:h-125 rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex flex-col justify-end p-8 shadow-md">
            <img 
              src={standardGlasses} 
              alt="Meta Glasses" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col items-center text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Meta Glasses</h3>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition shadow">
                  Shop
                </button>
                <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          
          <div className="relative h-112.5 md:h-125 rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex flex-col justify-end p-8 shadow-md">
            <img 
              src={raybanDark} 
              alt="Ray-Ban Meta" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col items-center text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Ray-Ban Meta</h3>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition shadow">
                  Shop
                </button>
                <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          
          <div className="relative h-112.5 md:h-125 rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex flex-col justify-end p-8 shadow-md">
            <img 
              src={raybanAudio} 
              alt="Ray-Ban Meta Audio" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col items-center text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Ray-Ban Meta Audio</h3>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition shadow">
                  Shop
                </button>
                <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>

        </div>

        
        <div className="relative w-full h-112.5 md:h-125 rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex flex-col justify-end p-8 shadow-md mt-6">
          <img 
            src={museCharmImg} 
            alt="Muse Charm" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative z-10 flex flex-col items-center text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Muse Charm</h3>
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition shadow">
                Shop
              </button>
              <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full transition">
                Learn more
              </button>
            </div>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
          
         
          <div className="relative h-112.5 md:h-125 rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex flex-col justify-end p-8 shadow-md">
            <img 
              src={oakleyMetaImg} 
              alt="Oakley Meta" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col items-center text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Oakley Meta</h3>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition shadow">
                  Shop
                </button>
                <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          
          <div className="relative h-112.5 md:h-125 rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex flex-col justify-end p-8 shadow-md">
            <img 
              src={raybanDisplayImg} 
              alt="Meta Ray-Ban Display" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col items-center text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Meta Ray-Ban Display</h3>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition shadow">
                  Shop
                </button>
                <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>

        </div>

      
        <div className="relative w-full h-112.5 md:h-125 rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex flex-col justify-end p-8 shadow-md mt-6">
          <img 
            src={quest3sImg} 
            alt="Meta Quest 3S" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative z-10 flex flex-col items-center text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Meta Quest 3S</h3>
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition shadow">
                Shop
              </button>
              <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full transition">
                Learn more
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StoreGrid;