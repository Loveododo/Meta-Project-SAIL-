import connectNewsImg from "../../../assets/metaConnect.webp"; 
import aiGlassesNewsImg from "../../../assets/questionImg.webp";

const LatestNews = () => {
  return (
    <section className="w-full bg-white py-16 px-6 flex flex-col items-center">
      <div className="max-w-300 w-full mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-12 text-center">
          The latest from Meta
        </h2>

        {/* Two-Column News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
          
          {/* Card 1: Everything We Announced at Meta Connect 2026 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full h-[320px] rounded-3xl overflow-hidden mb-5 bg-gray-100 shadow-sm">
              <img 
                src={connectNewsImg} 
                alt="Everything We Announced at Meta Connect 2026" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
              Everything We Announced at Meta Connect 2026
            </h3>
          </div>

          {/* Card 2: Meta's AI Glasses: Your Questions Answered */}
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full h-[320px] rounded-3xl overflow-hidden mb-5 bg-gray-100 shadow-sm">
              <img 
                src={aiGlassesNewsImg} 
                alt="Meta's AI Glasses: Your Questions Answered" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
              Meta's AI Glasses: Your Questions Answered
            </h3>
          </div>

        </div>

        {/* Newsletter Signup Banner */}
        <div className="w-full bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex flex-col text-left max-w-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              Get news and updates from Meta
            </h4>
          </div>

          <div className="flex flex-col w-full md:w-auto">
            <div className="flex items-center gap-3">
              <input 
                type="email" 
                placeholder="Email" 
                className="px-4 py-3 bg-white border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-600 w-full md:w-80 shadow-inner"
              />
              <button className="px-6 py-3 bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-700 font-medium text-sm rounded-full transition shadow-sm whitespace-nowrap">
                Sign up
              </button>
            </div>
            <p className="text-[11px] text-gray-500 mt-3 max-w-md leading-relaxed">
              By signing up, you agree to receive email and other marketing communications about Meta's products and services. You can unsubscribe at any time. Read our <a href="#privacy" className="underline hover:text-gray-800">Privacy Policy</a> and <a href="#terms" className="underline hover:text-gray-800">Terms</a>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestNews;