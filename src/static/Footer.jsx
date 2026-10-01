import metaLogo from "../assets/meta.png"; 
import fbIcon from "../assets/facebook.png";    
import igIcon from "../assets/insta.png";
import threadsIcon from "../assets/threads.png";
import ytIcon from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-500 text-xs py-16 px-6 md:px-24 border-t border-gray-200">
      <div className="max-w-350 mx-auto flex flex-col justify-between">
        

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
            <img src={metaLogo} alt="Meta Logo" className="w-20 object-contain" />
            <div className="flex gap-4 items-center">
              <a href="#facebook" className="hover:opacity-75 transition">
                <img src={fbIcon} alt="Facebook" className="w-5 h-5 object-contain" />
              </a>
              <a href="#instagram" className="hover:opacity-75 transition">
                <img src={igIcon} alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a href="#threads" className="hover:opacity-75 transition">
                <img src={threadsIcon} alt="Threads" className="w-5 h-5 object-contain" />
              </a>
              <a href="#youtube" className="hover:opacity-75 transition">
                <img src={ytIcon} alt="YouTube" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>

       
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-900 mb-1">Meta Store</h4>
            <a href="#glasses" className="hover:underline">Meta Glasses</a>
            <a href="#rayban" className="hover:underline">Ray-Ban Meta glasses</a>
            <a href="#quest" className="hover:underline">Meta Quest 3S</a>
            <a href="#quest3" className="hover:underline">Meta Quest 3</a>
            <a href="#apps" className="hover:underline">Apps and games</a>
            <a href="#accessories" className="hover:underline">Meta Quest accessories</a>
            <a href="#gift" className="hover:underline">Meta Gift Card</a>
          </div>

      
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-900 mb-1">Community</h4>
            <a href="#creators" className="hover:underline">Creators</a>
            <a href="#developers" className="hover:underline">Developers</a>
            <a href="#nonprofits" className="hover:underline">Non-profits</a>
            <h4 className="font-semibold text-gray-900 mt-4 mb-1">Our actions</h4>
            <a href="#privacy" className="hover:underline">Data and privacy</a>
            <a href="#safety" className="hover:underline">Responsible business practices</a>
          </div>

      
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-900 mb-1">About us</h4>
            <a href="#about" className="hover:underline">About Meta</a>
            <a href="#careers" className="hover:underline">Careers</a>
            <a href="#media" className="hover:underline">Media gallery</a>
            <a href="#brand" className="hover:underline">Brand resources</a>
            <a href="#investors" className="hover:underline">For investors</a>
            <a href="#newsroom" className="hover:underline">Newsroom</a>
          </div>

          
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-900 mb-1">App support</h4>
            <a href="#fbhelp" className="hover:underline">Facebook Help Center</a>
            <a href="#messenger" className="hover:underline">Messenger Help Center</a>
            <a href="#instahelp" className="hover:underline">Instagram Help Center</a>
            <a href="#whatsapp" className="hover:underline">WhatsApp Help Center</a>
            
            <h4 className="font-semibold text-gray-900 mt-4 mb-1">Site terms</h4>
            <a href="#privacy" className="hover:underline">Privacy policy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>

        </div>

        
        <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
          <span className="cursor-pointer hover:underline text-gray-800 font-medium">English (US)</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;