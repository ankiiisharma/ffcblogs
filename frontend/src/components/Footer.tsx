import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm">
            This is a beta testing app. You might face some bugs. Feel free to report them to us and help enhance your experience!
          </p>
        </div>
        <hr className="mt-2 mb-5 border-slate-100" />
        
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[100px]">
          {/* Brand Name */}
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold tracking-wider">FF Competitive</h1>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-8">
            <a href="https://www.linkedin.com/company/86763220" className="flex items-center space-x-1 hover:text-sky-400 transition duration-300">
              <span className="text-sm font-medium">Linkedin</span>
              <FiArrowUpRight size={16} />
            </a>
            <a href="https://www.x.com/ff_competitive" className="flex items-center space-x-1 hover:text-sky-400 transition duration-300">
              <span className="text-sm font-medium">Twitter</span>
              <FiArrowUpRight size={16} />
            </a>
            <a href="https://www.instagram.com/ff_competitive" className="flex items-center space-x-1 hover:text-pink-500 transition duration-300">
              <span className="text-sm font-medium">Instagram</span>
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-xs">&copy; {new Date().getFullYear()} FF Competitive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
