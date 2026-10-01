import { Link } from "react-router-dom";
import { Handbag, Menu, UserRound } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSwitch = () => {
    setToggle(!toggle);
  };

  const closeSidebar = () => {
    setToggle(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white flex h-20 px-8 md:px-16 lg:px-24 justify-between items-center font-medium shadow-sm">
        
        <div className="flex items-center gap-10">
          <Link to="/" className="cursor-pointer">
            <img className="w-20" src="logooo.svg" alt="metalogo" />
          </Link>
          <nav className="hidden md:flex gap-8 text-sm text-gray-800">
            <Link to="/about" className="cursor-pointer hover:text-blue-600 transition">About</Link>
            <span className="cursor-pointer hover:text-blue-600 transition">AI glasses</span>
            <span className="cursor-pointer hover:text-blue-600 transition">Meta Quest</span>
            <span className="cursor-pointer hover:text-blue-600 transition">Apps and games</span>
          </nav>
        </div>

   
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-800">
          <span className="cursor-pointer hover:text-blue-600 transition">Explore Meta</span>
          <span className="cursor-pointer hover:text-blue-600 transition">Support</span>
          <div className="flex gap-5 items-center text-gray-700">
            <div className="cursor-pointer hover:text-blue-600 transition"><Handbag className="w-5 h-5" /></div>
            <div className="cursor-pointer hover:text-blue-600 transition"><UserRound className="w-5 h-5" /></div>
          </div>
        </div>

        
        <div onClick={toggleSwitch} className="md:hidden cursor-pointer text-gray-800 p-2">
          <Menu className="w-6 h-6" />
        </div>
      </header>

    
      {toggle && <Sidebar closeSidebar={closeSidebar} />}
    </>
  );
};

export default Header;