import { Link } from 'react-router-dom';
import { useScrollY } from '../hooks/useReveal.js';

export default function Navbar() {
  const y = useScrollY();
  const scrolled = y > 8;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lift' : 'bg-navy'
      }`}
    >
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display font-bold text-2xl tracking-tight text-white">
            Car Truck <span className="text-blue-light group-hover:text-blue transition-colors">Loans</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-medium text-white">
          <a href="/#how-it-works" className="hidden sm:inline hover:text-blue-light transition-colors">
            How it works
          </a>
          <a href="/#faq" className="hidden sm:inline hover:text-blue-light transition-colors">
            FAQ
          </a>
          <Link
            to="/apply"
            className="bg-blue hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-glow text-white font-semibold px-5 py-2.5 rounded-lg transition-all"
          >
            Get pre-approved
          </Link>
        </nav>
      </div>
    </header>
  );
}
