import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          <Link to="/" className="flex items-center space-x-1 flex-shrink-0">
            <span
              className="text-2xl font-black text-gray-900 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Shop
            </span>
            <span
              className="text-2xl font-light text-gray-400 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Kart
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive("/")
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="block h-0.5 w-full bg-gray-900 mt-0.5 rounded-full" />
              )}
            </Link>

            <Link
              to="/products"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive("/products")
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              Products
              {isActive("/products") && (
                <span className="block h-0.5 w-full bg-gray-900 mt-0.5 rounded-full" />
              )}
            </Link>
          </div>

          <div className="flex items-center space-x-3">

            <Link
              to="/cart"
              className="relative flex items-center space-x-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-emerald-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between py-3 text-sm font-medium border-b border-gray-50 ${
              isActive("/") ? "text-gray-900" : "text-gray-500"
            }`}
          >
            <span>Home</span>
            {isActive("/") && <span className="w-1.5 h-1.5 bg-gray-900 rounded-full" />}
          </Link>
          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between py-3 text-sm font-medium ${
              isActive("/products") ? "text-gray-900" : "text-gray-500"
            }`}
          >
            <span>Products</span>
            {isActive("/products") && <span className="w-1.5 h-1.5 bg-gray-900 rounded-full" />}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
