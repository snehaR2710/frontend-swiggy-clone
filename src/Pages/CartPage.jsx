import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import EmptyCartPage from "../Component/Cart/EmptyCartPage";

function CartPage() {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  // Empty cart
  if (cartItems.length === 0) {
    return <EmptyCartPage />;
  }

  // Price calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
        Your Cart
      </h1>

      {/* Cart Items */}
      <div className="space-y-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 md:p-5 flex flex-col md:flex-row gap-5 md:justify-between md:items-centerr"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover"
              />

              <div>
                <h2 className="text-xl md:text-2xl">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  ₹{item.price}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-end md:justify-center items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="w-10 h-10 bg-[#FC8019] text-white rounded-lg text-xl hover:bg-orange-600 transition cursor-pointer"
              >
                −
              </button>

              <span className="text-lg font-medium">
                {item.quantity}
              </span>

              <button
                onClick={() => addToCart(item)}
                className="w-10 h-10 bg-[#FC8019] text-white rounded-lg text-xl hover:bg-orange-600 transition cursor-pointer"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-2xl hover:text-red-600 transition cursor-pointer"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bill Summary */}
      <div className="mt-8 md:mt-10 bg-white rounded-2xl shadow-md p-5 md:p-6">
        <div className="flex justify-between text-lg mb-4">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-lg mb-4">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee}</span>
        </div>

        <hr className="my-5" />

        <div className="flex justify-between text-2xl md:text-3xl font-bold">
          <span>Total</span>
          <span className="text-[#FC8019]">
            ₹{total}
          </span>
        </div>

        <button className="mt-8 w-full bg-[#FC8019] text-white py-3 md:py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;