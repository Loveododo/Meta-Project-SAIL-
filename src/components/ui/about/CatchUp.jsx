import { CircleArrowRight } from "lucide-react";
import news1 from "../../../assets/news1.webp";
import news2 from "../../../assets/news2.webp";
import news3 from "../../../assets/news3.webp";
import sunglasses from "../../../assets/sunglasses.webp";
import SGlass from "../../../assets/SGlass.png"; 
import vrG from "../../../assets/vrG.webp";
import vrDevice from "../../../assets/vrDevice.png"; 
import connectVideo from "../../../assets/connect_vid.mp4";


import action1 from "../../../assets/safety.webp"; 
import action2 from "../../../assets/data.webp";
import action3 from "../../../assets/responsible.webp";
import leaderImg from "../../../assets/fbCeo.webp"; 

const CatchUp = () => {
  return (
    <section className="py-24 px-6 flex justify-center w-full">
      <main className="w-full max-w-300 flex flex-col items-center">
        
        
        <h1 className="font-medium text-[2.5em] mb-4 text-center">
          Catch up on the latest news
        </h1>
        <button className="px-6 py-2.5 rounded-full border border-gray-400 font-medium hover:bg-gray-100 transition">
          See More At Newsroom
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16 w-full">
          
          
          <article className="flex flex-col group cursor-pointer w-full">
            <div className="w-full h-56 rounded-3xl mb-6 overflow-hidden bg-gray-100">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src={news1}
                alt="News update 1"
              />
            </div>
            <p className="font-medium text-[17px] leading-tight mb-4">
              Introducing Meta One: A Subscription Service With More Features
              and AI to Create, Connect, and Stand Out
            </p>
            <div className="flex gap-2 items-center group-hover:text-blue-600 transition">
              <CircleArrowRight className="w-5 h-5" />
              <span className="font-semibold">Read More</span>
            </div>
          </article>

          
          <article className="flex flex-col group cursor-pointer w-full">
            <div className="w-full h-56 rounded-3xl mb-6 overflow-hidden bg-gray-100">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src={news2}
                alt="News update 2"
              />
            </div>
            <p className="font-medium text-[17px] leading-tight mb-4">
              Introducing Meta One: A Subscription Service With More Features
              and AI to Create, Connect, and Stand Out
            </p>
            <div className="flex gap-2 items-center group-hover:text-blue-600 transition">
              <CircleArrowRight className="w-5 h-5" />
              <span className="font-semibold">Read More</span>
            </div>
          </article>

        
          <article className="flex flex-col group cursor-pointer w-full">
            <div className="w-full h-56 rounded-3xl mb-6 overflow-hidden bg-gray-100">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src={news3}
                alt="News update 3"
              />
            </div>
            <p className="font-medium text-[17px] leading-tight mb-4">
              Introducing Meta One: A Subscription Service With More Features
              and AI to Create, Connect, and Stand Out
            </p>
            <div className="flex gap-2 items-center group-hover:text-blue-600 transition">
              <CircleArrowRight className="w-5 h-5" />
              <span className="font-semibold">Read More</span>
            </div>
          </article>

        </div>

       
        <div className="w-full mt-16 pt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-16 text-gray-900">
            Shop the latest devices and expand your world
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 w-full">
            
           
            <div className="flex flex-col items-center group cursor-pointer w-full">
              <div className="relative w-full mb-16">
                <div className="w-full h-80 md:h-96 rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                  <img src={sunglasses} alt="Person wearing Ray-Ban Meta" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64 md:w-72 z-10">
                  <img src={SGlass} alt="Ray-Ban Meta Glasses" className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>
              </div>
              
              <h3 className="text-2xl font-medium mt-16 mb-2">
                Ray-Ban Meta AI glasses
              </h3>
              <p className="text-gray-600 text-sm max-w-xs mb-6">
                Capture, share and stay in the moment, completely hands-free.
              </p>
              <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
                Shop now
              </button>
            </div>

           
            <div className="flex flex-col items-center group cursor-pointer w-full">
              <div className="relative w-full mb-16">
                <div className="w-full h-80 md:h-96 rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                  <img src={vrG} alt="Person using Meta Quest" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-56 md:w-64 z-10">
                  <img src={vrDevice} alt="Meta Quest 3S" className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>
              </div>
              
              <h3 className="text-2xl font-medium mt-16 mb-2">
                Meta Quest 3S
              </h3>
              <p className="text-gray-600 text-sm max-w-xs mb-6">
                Dive into the wonder of mixed reality with the new Meta Quest 3S.
              </p>
              <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
                Shop now
              </button>
            </div>

          </div>
        </div>

     
        <div className="w-full mt-28 pt-20 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-medium mb-8 text-gray-900 max-w-2xl leading-tight">
            Connect in new ways with our products
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
              Explore our technologies
            </button>
            <a href="#help" className="font-semibold text-gray-900 hover:underline flex items-center gap-1">
              Go to Help Center <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="w-full h-100 md:h-137.5 rounded-3xl overflow-hidden bg-gray-100 shadow-lg relative mb-32">
            <video 
              src={connectVideo}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
              Stay informed about our actions
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              We're committed to helping keep people safe and making a positive impact.
            </p>
            <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
              Learn more
            </button>
          </div>

        
          <div className="flex flex-col gap-6 w-full">
           
            <div className="flex items-center gap-6 p-4 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group">
              <img src={action1} alt="Safety" className="w-24 h-24 rounded-2xl object-cover shrink-0" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition mb-1">
                  Safety and expression
                </h4>
                <p className="text-sm text-gray-600">
                  Protecting your voice and helping you connect and share safely
                </p>
              </div>
            </div>

            
            <div className="flex items-center gap-6 p-4 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group">
              <img src={action2} alt="Privacy" className="w-24 h-24 rounded-2xl object-cover shrink-0" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition mb-1">
                  Data and privacy
                </h4>
                <p className="text-sm text-gray-600">
                  Giving you control over your privacy and protecting your information
                </p>
              </div>
            </div>

           
            <div className="flex items-center gap-6 p-4 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group">
              <img src={action3} alt="Innovation" className="w-24 h-24 rounded-2xl object-cover shrink-0" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition mb-1">
                  Responsible innovation
                </h4>
                <p className="text-sm text-gray-600">
                  Building for the future with privacy and safety in mind
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
              Meet our leadership
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Meta's leaders are guiding our company as mixed reality and AI evolve, helping to create the next evolution of digital connection.
            </p>
            <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
              Get to know our leadership
            </button>
          </div>

       
          <div className="w-full h-100 md:h-112.5 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            <img 
              src={leaderImg} 
              alt="Meta Leadership" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>

      </main>
    </section>
  );
};

export default CatchUp;