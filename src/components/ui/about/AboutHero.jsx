import CatchUp from "./CatchUp";
import Footer from "../../../static/Footer";
import { useState, useRef } from "react";
import { Pause, Play } from "lucide-react";
import fullpageModule from "@fullpage/react-fullpage";
import vid1 from "../../../assets/metavid1.mp4";
import vid2 from "../../../assets/metavid2.mp4";
import vid3 from "../../../assets/metavid3.mp4";
import vid4 from "../../../assets/metavid4.mp4";

const ReactFullpage = fullpageModule.default ?? fullpageModule;

const AboutHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const togglePlay = () => {
    const currentVideo = videoRefs[activeIndex].current;
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-black min-h-screen">
      
     
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <video ref={videoRefs[0]} src={vid1} autoPlay loop muted playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${activeIndex === 0 ? "opacity-100" : "opacity-0"}`} />
        <video ref={videoRefs[1]} src={vid2} autoPlay loop muted playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${activeIndex === 1 ? "opacity-100" : "opacity-0"}`} />
        <video ref={videoRefs[2]} src={vid3} autoPlay loop muted playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${activeIndex === 2 ? "opacity-100" : "opacity-0"}`} />
        <video ref={videoRefs[3]} src={vid4} autoPlay loop muted playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${activeIndex === 3 ? "opacity-100" : "opacity-0"}`} />
      </div>

     
      {activeIndex < 4 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition cursor-pointer shadow-lg"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      )}

      <div className="relative z-10">
        <ReactFullpage
          licenseKey={"gplv3-license"}
          scrollingSpeed={1000}
          autoScrolling={false}
          fitToSection={false}
          scrollBar={true}
          credits={{ enabled: false }}
          onLeave={(origin, destination, direction) => {
            setActiveIndex(destination.index);
            const targetVideo = videoRefs[destination.index].current;
            if (targetVideo) {
              if (isPlaying) {
                targetVideo.play();
              } else {
                targetVideo.pause();
              }
            }
          }}
          render={() => (
            <ReactFullpage.Wrapper>
              
              <div className="section h-screen flex flex-col justify-center items-center">
                <div className="h-full w-full flex flex-col justify-center items-center bg-transparent">
                  <h1 className="max-w-150 mx-10 font-medium text-4xl md:text-5xl text-center text-white mb-6 drop-shadow-lg">
                    We're building the future of human connection
                  </h1>
                  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
                    Our Mission
                  </button>
                </div>
              </div>

              <div className="section h-screen flex flex-col justify-center items-center">
                <div className="h-full w-full flex flex-col justify-center items-center bg-transparent">
                  <h1 className="max-w-150 mx-10 font-medium text-4xl md:text-5xl text-center text-white mb-6 drop-shadow-lg">
                    And the technologies that make it possible
                  </h1>
                  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
                    Our Technologies
                  </button>
                </div>
              </div>

              <div className="section h-screen flex flex-col justify-center items-center">
                <div className="h-full w-full flex flex-col justify-center items-center bg-transparent">
                  <h1 className="max-w-150 mx-10 font-medium text-4xl md:text-5xl text-center text-white mb-6 drop-shadow-lg">
                    Our innovations give people new ways to connect
                  </h1>
                  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
                    AI at Meta
                  </button>
                </div>
              </div>

              <div className="section h-screen flex flex-col justify-center items-center">
                <div className="h-full w-full flex flex-col justify-center items-center bg-transparent">
                  <h1 className="max-w-200 mx-10 font-medium text-4xl md:text-5xl text-center text-white mb-6 drop-shadow-lg">
                    And we're committed to helping keep everyone safe and making a positive impact
                  </h1>
                  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
                    Our Actions
                  </button>
                </div>
              </div>

              <div className="section fp-auto-height bg-white relative z-20">
                <CatchUp />
                <Footer />
              </div>

            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    </div>
  );
};

export default AboutHero;