import { Link } from "react-router-dom";
import logo from "../assets/lazySalesLogo.png";
import { ShoppingCart } from "lucide-react";

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
        <ShoppingCart/>
      </nav>
    </header>
  );
}