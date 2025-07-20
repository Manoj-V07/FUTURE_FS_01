import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-slate-900 shadow-md z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Manoj's Portfolio
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-28 mr-10 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-slate-400">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-slate-400">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-slate-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-slate-400">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4 text-white font-medium">
          <a href="#about" onClick={closeMenu} className="block hover:text-slate-400">About</a>
          <a href="#skills" onClick={closeMenu} className="block hover:text-slate-400">Skills</a>
          <a href="#projects" onClick={closeMenu} className="block hover:text-slate-400">Projects</a>
          <a href="#contact" onClick={closeMenu} className="block hover:text-slate-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
