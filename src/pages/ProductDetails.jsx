import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-6xl mb-6">😕</p>
          <h2
            className="text-2xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Product not found
          </h2>
          <button
            onClick={() => navigate("/products")}
            className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = Boolean(cartItem);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const originalPrice = Math.ceil((product.price * 1.28) / 50) * 50;
  const discountPercent = Math.round((1 - product.price / originalPrice) * 100);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < Math.floor(rating) ? "text-amber-400" : "text-gray-200"}`}>
        ★
      </span>
    ));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <button onClick={() => navigate("/")} className="hover:text-gray-700 transition-colors">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate("/products")} className="hover:text-gray-700 transition-colors">
            Products
          </button>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate max-w-xs">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gray-50 h-[480px] md:h-[560px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute top-5 left-5 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {discountPercent}% OFF
            </span>
          </div>

          <div className="flex flex-col py-2">

            <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-3">
              {product.category}
            </p>

            <h1
              className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="font-semibold text-gray-800 text-sm">{product.rating}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 text-sm">{product.reviews} reviews</span>
            </div>

            <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
              <p
                className="text-4xl font-black text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <p className="text-lg text-gray-400 line-through mb-0.5">
                ₹{originalPrice.toLocaleString("en-IN")}
              </p>
              <span className="mb-0.5 text-sm font-semibold text-emerald-600">
                Save {discountPercent}%
              </span>
            </div>

            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-700 font-medium text-sm">Qty:</span>
              <div className="inline-flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 font-medium text-lg transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center text-sm font-bold text-gray-900 border-x border-gray-200 h-10 flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 font-medium text-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {isInCart && (
              <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-3 rounded-xl mb-4 text-sm border border-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>In your cart — qty: {cartItem.quantity}</span>
              </div>
            )}

            {addedToCart && (
              <div className="flex items-center gap-2 text-gray-700 bg-gray-100 px-4 py-3 rounded-xl mb-4 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Added to cart!</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-900 text-white font-semibold py-4 px-6 rounded-full hover:bg-gray-700 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="flex-1 border border-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-full hover:border-gray-900 hover:text-gray-900 active:scale-95 transition-all duration-200"
              >
                View Cart →
              </button>
            </div>

            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure Payment
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                7-day Returns
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Free Shipping
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-100 pt-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
                  You may also like
                </p>
                <h2
                  className="text-2xl md:text-3xl font-black text-gray-900"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Related Products
                </h2>
              </div>
              <button
                onClick={() => navigate(`/products?category=${product.category}`)}
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors hidden sm:block"
              >
                More in {product.category} →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
