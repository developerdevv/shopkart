import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {

  const navigate = useNavigate();
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();

  const deliveryFee = cartTotal > 999 ? 0 : 99;
  const finalTotal = cartTotal + deliveryFee;

  const amountToFreeShipping = Math.max(0, 999 - cartTotal);

  const shippingProgress = Math.min(100, (cartTotal / 999) * 100);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2
            className="text-2xl font-black text-gray-900 mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Your cart is empty
          </h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Looks like you haven't added anything yet.
            Explore our collection and find something you love.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-gray-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-gray-700 active:scale-95 transition-all duration-200"
          >
            Start Shopping
          </button>
          <button
            onClick={() => navigate("/")}
            className="block mx-auto mt-4 text-gray-400 hover:text-gray-700 text-sm transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="border-b border-gray-100 bg-white pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-black text-gray-900 mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            My Cart
          </h1>
          <p className="text-gray-400 text-sm">
            {cartCount} item{cartCount !== 1 ? "s" : ""} in your cart
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">

            <div className="flex items-center justify-between mb-2">
              <h2
                className="font-semibold text-gray-900 text-sm uppercase tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Items ({cartCount})
              </h2>
              <button
                onClick={clearCart}
                className="text-xs text-gray-400 hover:text-red-500 transition-colors underline underline-offset-2"
              >
                Remove all
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 px-4 py-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-900 text-sm font-medium mt-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Continue Shopping
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">

              <h2
                className="font-black text-gray-900 text-lg mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Order Summary
              </h2>

              {deliveryFee > 0 && (
                <div className="mb-6 bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Add ₹{amountToFreeShipping.toLocaleString("en-IN")} for free shipping</span>
                    <span className="text-emerald-500 font-semibold">🎯</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${shippingProgress}%` }}
                    />
                  </div>
                </div>
              )}
              {deliveryFee === 0 && (
                <div className="mb-6 bg-emerald-50 rounded-xl p-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500 flex-shrink-0" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs text-emerald-700 font-medium">You've unlocked free shipping!</p>
                </div>
              )}

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery</span>
                  <span className={`font-medium ${deliveryFee === 0 ? "text-emerald-500" : "text-gray-900"}`}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Taxes</span>
                  <span className="font-medium text-gray-900">Included</span>
                </div>
              </div>

              <div className="border-t border-gray-100 mb-6" />

              <div className="flex justify-between items-end mb-6">
                <span className="text-sm font-semibold text-gray-900">Total</span>
                <p
                  className="text-3xl font-black text-gray-900"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  ₹{finalTotal.toLocaleString("en-IN")}
                </p>
              </div>

              <button
                onClick={() =>
                  alert("🎉 Order placed successfully!\n\nThank you for shopping with ShopKart!")
                }
                className="w-full bg-gray-900 text-white font-semibold py-4 rounded-full hover:bg-gray-700 active:scale-95 transition-all duration-200 text-sm"
              >
                Place Order →
              </button>

              <div className="flex items-center justify-center gap-5 mt-5">
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure
                </div>
                <span className="text-gray-200">|</span>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                  </svg>
                  Easy Returns
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
