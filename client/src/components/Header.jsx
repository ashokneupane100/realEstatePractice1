import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">CodingCleverly</span>
            <span className="text-slate-800 ml-1">Estate</span>
          </h1>
        </Link>

        {/* Search Form */}
        <form className="relative flex items-center">
          <input
            type="text"
            className="bg-white rounded-full px-4 py-2 pl-10 focus:outline-none w-24 sm:w-64 shadow-inner"
            placeholder="Search the address ..."
          />
          <FaSearchLocation className="absolute left-3 text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer ">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="sm:inline text-slate-700 hover:underline cursor-pointer ">
              {" "}
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
