import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-slate-900 shadow-md overflow-x-hidden ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center overflow-x-hidden">
        <h1 className="text-white text-xl sm:text-2xl font-bold whitespace-nowrap">
          Manoj's Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#about" className="hover:text-slate-400">About</a></li>
          <li><a href="#skills" className="hover:text-slate-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-slate-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-slate-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden w-full ${
          isOpen ? "max-h-64 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-white font-medium">
          <li><a href="#about" onClick={closeMenu} className="hover:text-slate-400">About</a></li>
          <li><a href="#skills" onClick={closeMenu} className="hover:text-slate-400">Skills</a></li>
          <li><a href="#projects" onClick={closeMenu} className="hover:text-slate-400">Projects</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-slate-400">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
