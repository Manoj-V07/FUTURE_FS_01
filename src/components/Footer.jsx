const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 py-6 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-lg font-semibold">
          © 2025 Manoj. All rights reserved.
        </div>
        
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/manoj-v-646218333/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">LinkedIn</a>
          <a href="https://github.com/Manoj-V07/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">GitHub</a>
          <a href="https://www.instagram.com/manoj_v7689/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">Instagram</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
