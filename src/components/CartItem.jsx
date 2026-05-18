import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-start gap-4 py-6 border-b border-gray-100 last:border-b-0">
      <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
          {item.category}
        </p>
        <h4
          className="text-gray-900 font-semibold text-sm leading-snug mb-1 line-clamp-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {item.title}
        </h4>
        <p className="text-gray-500 text-xs mb-3">
          ₹{item.price.toLocaleString("en-IN")} each
        </p>

        <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-lg"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-semibold text-gray-900 border-x border-gray-200 h-8 flex items-center justify-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-lg"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end flex-shrink-0 gap-3">
        <div className="text-right">
          <p className="font-bold text-gray-900 text-base">
            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
          </p>
          {item.quantity > 1 && (
            <p className="text-xs text-gray-400">
              {item.quantity} × ₹{item.price.toLocaleString("en-IN")}
            </p>
          )}
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors duration-200 underline underline-offset-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
