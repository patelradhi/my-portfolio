import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
