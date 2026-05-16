import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold">
          Freelancer Hub
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">

          <Link to="/">
            <button className="bg-white text-blue-600 px-4 py-2 rounded">
              Home
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-white text-blue-600 px-4 py-2 rounded">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-black px-4 py-2 rounded">
              Register
            </button>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="flex flex-col mt-4 space-y-4 md:hidden">

          <Link to="/">
            <button className="bg-white text-blue-600 px-4 py-2 rounded w-full">
              Home
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-white text-blue-600 px-4 py-2 rounded w-full">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-black px-4 py-2 rounded w-full">
              Register
            </button>
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;