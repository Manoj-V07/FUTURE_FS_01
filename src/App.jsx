import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      startEvent: 'DOMContentLoaded',
      useClassNames: false,
      disableMutationObserver: false,
      offset: 100,
      disable : false,
      debounceDelay: 50,
      throttleDelay: 99,
        });
    AOS.refresh();
  }, []);

  return (
    <div className="App bg-slate-900 text-white scroll-smooth">
      <Header />
      <main className="pt-20">
        <section id="about" className="scroll-mt-20 min-h-screen">
          <About />
        </section>
        <section id="skills" className="scroll-mt-16 min-h-screen">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-8 min-h-screen">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
