import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [isWishlisted, setIsWishlisted] = useState(false);

  const originalPrice = Math.ceil((product.price * 1.28) / 50) * 50;
  const discountPercent = Math.round((1 - product.price / originalPrice) * 100);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "text-amber-400" : "text-gray-200"}>
        ★
      </span>
    ));

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col">

      <div
        className="relative overflow-hidden cursor-pointer bg-gray-50 h-64"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {discountPercent}% OFF
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center transition-transform duration-200 hover:scale-110"
        >
          {isWishlisted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">

        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
          {product.category}
        </p>

        <h3
          className="text-gray-900 font-semibold text-sm leading-snug mb-2 line-clamp-2 cursor-pointer hover:text-emerald-600 transition-colors duration-200"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.title}
        </h3>

        <div className="flex items-center space-x-1.5 mb-3">
          <div className="flex text-xs">{renderStars(product.rating)}</div>
          <span className="text-gray-400 text-xs">({product.reviews})</span>
        </div>

        <div className="flex-1" />

        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
            <p className="text-xs text-gray-400 line-through">
              ₹{originalPrice.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
