import { useState } from "react";
import { IoLogoInstagram, IoMenu, IoClose } from "react-icons/io5";
import { FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-2xl mx-auto mt-2">
      <nav className="border-b border-gray-200 px-4 py-4 mb-10 bg-white  relative">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/blogs" className="text-lg font-semibold text-blue-700">
            FF Competitive
          </a>

          {/* Hamburger Icon (for mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-blue-700 focus:outline-none transition-transform duration-300 transform hover:scale-110"
          >
            <IoMenu />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {/* <a href="#" className="text-gray-700 hover:text-blue-700 transition duration-300">Case Studies</a>
            <a href="#" className="text-gray-700 hover:text-blue-700 transition duration-300">Trending</a> */}
            <a href="/aboutus" className="text-gray-700 hover:text-blue-700 transition duration-300">About Us</a>
            <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-pink-500 transition duration-300">
             <div className="flex items-center gap-1"> <IoLogoInstagram />
             <span>Instagram</span> </div>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } absolute top-0 right-0 w-3/4 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center pt-8 space-y-8`}
        >
          {/* Close Button inside the Mobile Menu */}
          <button
            onClick={toggleMenu}
            className="text-2xl text-blue-700 absolute top-4 right-4 focus:outline-none"
          >
            <IoClose />
          </button>

          <a href="/aboutus" className="text-gray-700 hover:text-blue-700 transition duration-300 text-lg flex items-center"><FiArrowUpRight size={20}/> About Us</a>
          {/* <a href="#" className="text-gray-700 hover:text-blue-700 transition duration-300 text-lg flex items-center"><FiArrowUpRight size={20}/> Case Studies</a>
          <a href="#" className="text-gray-700 hover:text-blue-700 transition duration-300 text-lg flex items-center"> <FiArrowUpRight size={20}/>Trending</a> */}
          <a href="https://www.instagram.com/ff_competitive" className="flex items-center space-x-1 text-gray-700 hover:text-pink-500 transition duration-300 text-lg">
            <IoLogoInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
