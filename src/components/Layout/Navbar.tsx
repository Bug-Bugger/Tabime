import logo from "@assets/tabime.svg";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="fixed w-full z-40 bg-slate-300 bg-opacity-50 backdrop-blur-lg shadow-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Tabime Logo"
            className="w-10 h-10 hover:rotate-180 ease-in-out transition-all duration-500"
          />
          <p className="text-2xl font-sans font-semibold ml-3 text-gray-800">
            Tabime
          </p>
        </div>

        <nav>
          <ul className="flex space-x-8 text-gray-700 font-medium mr-[4.5rem]">
            <li className="relative hover:text-[#2563eb] cursor-pointer transition-colors duration-300
            after:content-[''] after:bg-blue-500 
            after:absolute after:bottom-0 after:left-0 after:h-[2px] 
            after:w-0 after:transition-all after:duration-200 
            hover:after:bg-[#2563eb]
            hover:after:w-full">
              PlaceHolder
            </li>
            <li className="relative hover:text-[#2563eb] cursor-pointer transition-colors duration-300
            after:content-[''] after:bg-blue-500 
            after:absolute after:bottom-0 after:left-0 after:h-[2px] 
            after:w-0 after:transition-all after:duration-200 
            hover:after:bg-[#2563eb]
            hover:after:w-full">
              PlaceHolder
            </li>
            <li className="relative hover:text-[#2563eb] cursor-pointer transition-colors duration-300
            after:content-[''] after:bg-blue-500 
            after:absolute after:bottom-0 after:left-0 after:h-[2px] 
            after:w-0 after:transition-all after:duration-200 
            hover:after:bg-[#2563eb]
            hover:after:w-full">
              PlaceHolder
            </li>
            <li className="relative hover:text-[#2563eb] cursor-pointer transition-colors duration-300
            after:content-[''] after:bg-blue-500 
            after:absolute after:bottom-0 after:left-0 after:h-[2px] 
            after:w-0 after:transition-all after:duration-200 
            hover:after:bg-[#2563eb]
            hover:after:w-full">
              PlaceHolder
            </li>
          </ul>
        </nav>

        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
