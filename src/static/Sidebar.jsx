import { NavLink } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      className="h-screen w-full fixed inset-0 z-50 md:hidden flex"
      onClick={closeSidebar}
    >
      <section 
        className="bg-white w-72 h-screen flex flex-col gap-2 font-medium shadow-2xl pt-6"
        onClick={(e) => e.stopPropagation()} 
      >
        <NavLink onClick={closeSidebar} to="/">
          <div className="py-4 pl-6 hover:bg-gray-100 transition">Home</div>
        </NavLink>
        <NavLink onClick={closeSidebar} to="/about">
          <div className="py-4 pl-6 hover:bg-gray-100 transition">About</div>
        </NavLink>
        <div onClick={closeSidebar} className="py-4 pl-6 hover:bg-gray-100 transition cursor-pointer">Contact</div>
        <div onClick={closeSidebar} className="py-4 pl-6 hover:bg-gray-100 transition cursor-pointer">Buy</div>
      </section>
    </div>
  );
};

export default Sidebar;