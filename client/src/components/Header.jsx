import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        
        {/* Logo and Branding */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex items-center">
            <span className="text-slate-500">CodingCleverly</span>
            <span className="text-slate-800 ml-1">Estate</span>
          </h1>
        </Link>

        {/* Search Form */}
        <form className="relative flex items-center">
          <input
            type="text"
            className="bg-white rounded-full px-4 py-2 pl-10 focus:outline-none w-32 sm:w-64 shadow-inner"
            placeholder="Search the address ..."
          />
          <FaSearchLocation className="absolute left-3 text-slate-600 text-lg" />
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          <Link to="/" className="hidden sm:inline-block">
            <li className="text-slate-700 hover:text-blue-500 transition duration-300 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about" className="hidden sm:inline-block">
            <li className="text-slate-700 hover:text-blue-500 transition duration-300 cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/sign-in" className="inline-block">
            <li className="text-slate-700 hover:text-blue-500 transition duration-300 cursor-pointer">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
