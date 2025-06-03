import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { UseCart } from '../components/CartContext';
import Button from '../components/Button';
import logo from '/lazy-sales-logo.png';
import { Trash2 } from 'lucide-react';

export default function Header() {
  const { cart, removeFromCart } = UseCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [isCartOverlayVisible, setCartOverlayVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const overlayRef = useRef(null);
  const cartIconContainerRef = useRef(null);

  const toggleCartOverlay = () => {
    setCartOverlayVisible((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const goToCheckout = () => {
    setCartOverlayVisible(false);
    navigate('/checkout');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCartOverlayVisible &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target) &&
        cartIconContainerRef.current &&
        !cartIconContainerRef.current.contains(event.target)
      ) {
        setCartOverlayVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOverlayVisible]);

  return (
    <header className="bg-[#C8F9C6] relative flex flex-col justify-center">
      <div className="flex items-center justify-between px-8 min-h-[60px] md:min-h-[100px]">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-2xl font-bold text-black hover:underline"
          >
            <img
              src={logo}
              alt="Lazy Sales Logo"
              className="w-20 md:w-30 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 text-black">
            <Link
              to="/"
              className="hover:underline transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="hover:underline transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="secondary"
              className="p-2 focus:outline-none shadow-none"
              icon={
                isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )
              }
            />
          </div>

          <div className="relative" ref={cartIconContainerRef}>
            <button
              onClick={toggleCartOverlay}
              className="relative transition-transform duration-200 hover:scale-110 cursor-pointer"
              type="button"
              aria-label="Toggle cart overlay"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {isCartOverlayVisible && (
              <div
                ref={overlayRef}
                className="absolute right-[-32px] top-[40px] md:top-[60px] md:w-[450px] bg-white p-8 shadow-lg z-10 transition-all duration-300 ease-out transform w-screen"
              >
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    {item.image && (
                      <img
                        src={item.image.url}
                        alt={item.title}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover transition-transform duration-200 hover:scale-105 rounded"
                      />
                    )}
                    <div className="flex-1 px-2">
                      <h2 className="font-bold">{item.title}</h2>
                      <div className="mt-2">
                        {item.discountedPrice &&
                        item.discountedPrice < item.price ? (
                          <p className="flex flex-col">
                            <span className="line-through text-gray-500 text-[10px] md:text-[14px] ">
                              Kr {item.price}
                            </span>
                            <span className="text-green-600 font-bold text-[14px] md:text-[18px] ">
                              Kr {item.discountedPrice}
                            </span>
                          </p>
                        ) : (
                          <p className="text-lg font-bold text-[14px] md:text-[18px]">
                            Kr {item.price}
                          </p>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      variant="secondary"
                      className="p-1 text-black bg-gray-100 hover:bg-red-500"
                      icon={<Trash2 size={20} />}
                    />
                  </div>
                ))}

                <Button
                  text="Go to cart"
                  onClick={goToCheckout}
                  variable="primary"
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-[#C8F9C6] px-8 py-2 text-center text-lg pb-5">
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="block mb-2 hover:underline transition-colors duration-200 text-sm"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/contact"
            className="block hover:underline transition-colors duration-200 text-sm"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
