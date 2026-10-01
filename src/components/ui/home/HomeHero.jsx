import { useState, useRef } from "react";
import { Pause, Play } from "lucide-react";
import heroVideo from "../../../assets/homevid.mp4";

const HomeHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-screen bg-black text-white flex flex-col justify-between items-center overflow-hidden px-6 pt-32 pb-20">
      
      
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-75"
        />
      
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/50" />
      </div>

     
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4 text-white">
          Introducing Meta VR Glasses
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium mb-8">
          The weight is over
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition shadow-lg">
          Learn more
        </button>
      </div>

      
      <div className="relative z-20 w-full max-w-350 flex justify-end items-end pb-4 pr-4">
        <button 
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition cursor-pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>
      
    </section>
  );
};

export default HomeHero;