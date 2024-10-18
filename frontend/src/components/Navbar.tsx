import { IoLogoInstagram } from "react-icons/io5";

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <>   
      <div className="max-w-2xl mx-auto mt-2">
<nav className="border-gray-200 px-2 mb-10">
  <div className="container mx-auto flex flex-wrap items-center justify-between">
  <a href="#" className="flex">
      <span className="self-center text-lg font-semibold whitespace-nowrap">FF Competitive</span>
  </a>

  <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
    <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium items-center">
      <li>
        <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">About Us</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Case Studies</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Trending</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"><IoLogoInstagram /></a>
      </li>
    </ul>
  </div>
  </div>
</nav>

</div>
    </>
  )
}

export default Navbar