import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path, mobile = false) =>
    `transition ${
      isActive(path)
        ? "text-yellow-500 font-semibold"
        : scrolled || mobile
        ? "text-gray-800 hover:text-yellow-500"
        : "text-white hover:text-yellow-500"
    } ${mobile ? "block py-2 text-lg" : "pb-1 opacity-80 hover:opacity-100"}`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-[100px] flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png"
            alt="Basti Ki Pathshala Foundation"
            className="h-[80px] w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6 font-medium text-[16px]">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/about" className={linkClasses("/about")}>About Us</Link>
          <Link to="/volunteer" className={linkClasses("/volunteer")}>Volunteer</Link>
          <Link
            to="/donate"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded transition"
          >
            Donate
          </Link>
        </div>
        {!menuOpen && (
          <button
            onClick={toggleMenu}
            className={`md:hidden z-50 relative focus:outline-none ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-screen w-1/2 bg-white text-gray-800 px-6 py-10 shadow-lg z-50 transition-all duration-300">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <X size={28} />
            </button>
          </div>

          <div className="mt-10 space-y-6 font-medium">
            <Link to="/" className={linkClasses("/", true)} onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className={linkClasses("/about", true)} onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/volunteer" className={linkClasses("/volunteer", true)} onClick={toggleMenu}>
              Volunteer
            </Link>
            <Link
              to="/donate"
              className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded transition"
              onClick={toggleMenu}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
