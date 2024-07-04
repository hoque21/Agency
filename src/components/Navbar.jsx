import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg"; // Import the logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { Link: "Home", path: "home" },
    { Link: "Service", path: "service" },
    { Link: "About", path: "about" },
    { Link: "Product", path: "products" },
    { Link: "Testimonial", path: "testimonial" },
    { Link: "FAQ", path: "faq" },
    { Link: "Login", path: "login" },
  ];

  return (
    <header
      className={`w-full ${
        isSticky ? "bg-white shadow-lg" : "bg-white md:bg-transparent"
      } fixed top-0  z-50 transition-all duration-300`}
    >
      <nav className="flex items-center justify-between p-4">
        <div className="flex flex-col items-center space-y-3">
          <a
            href="/"
            className="text-2xl font-semibold flex flex-col items-center space-y-3"
          >
            <img src={logo} alt="LOGO" className="w-10" />
            <span className="text-2xl font-bold md:font-semibold">Nexcent</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl flex-col "
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
        </div>
        <div className="flex justify-center items-center right-2">
          <ul
            className={`md:flex items-center space-x-4 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            {navItems.map(({ Link, path }) => (
              <li key={path}>
                <a
                  href={`#${path}`}
                  className="text-lg font-medium hover:text-blue-500"
                >
                  {Link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
    </header>
  );
};

export default Navbar;



