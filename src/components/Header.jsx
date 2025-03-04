import { Link } from "react-router-dom";
import logo from "../assets/lazySalesLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#C8F9C6]">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Lazy Sales Logo"
          className="object-contain"
        />
      </div>

      <nav className="flex items-center gap-8 text-black">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        {}
        <div className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
}