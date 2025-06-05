/**
 * Footer component displaying the Lazy Sales logo and basic navigation links.
 *
 * @component
 * @returns {JSX.Element}
 */

import { Link } from 'react-router-dom';
import logo from '/lazy-sales-icon.png';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 py-10 mt-9 bg-[#C8F9C6]">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Lazy Sales Logo"
          className="w-20 md:w-30 object-contain"
        />
      </div>

      <nav className="flex flex-col text-black gap-2">
        <Link to="/contact" className="hover:underline">
          Contact us
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </footer>
  );
}
