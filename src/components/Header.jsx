import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-black bg-[#C8F9C6]">
      <div className="flex items-center gap-4">
        <img
          src="/lazy-sales-logo.svg"
          alt="Lazy Sales Logo"
          className="w-12 h-12"
        />
        <div className="leading-tight">
          <h1 className="text-xl font-bold">Lazy Sales</h1>
          <p className="text-sm">Chill, click, buy</p>
        </div>
      </div>
      <nav className="flex items-center gap-8">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}