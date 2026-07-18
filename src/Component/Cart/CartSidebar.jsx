import emptyCart from "../../../src/assets/empty-cart.png"
import CartRestaurant from "./CartRestaurant";

function CartSidebar({
  isCartOpen,
  setIsCartOpen,
  cartItems,
  decreaseQuantity,
  addToCart,
  removeFromCart
}) {

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const deleveryFee = subtotal > 0 ? 40 : 0

    const grandTotal = subtotal + deleveryFee;

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999]">

      <div className="absolute right-0 top-0 h-full w-[400px] bg-white/90 backdrop-blur-md shadow-xl p-6">

        <div className="flex justify-between items-center border-b pb-4">

          <h2 className="text-2xl font-bold">
            Your Cart
          </h2>

          <button
            onClick={() => setIsCartOpen(false)}
            className="text-3xl cursor-pointer"
          >
            ×
          </button>

        </div>

        <div className="mt-6">

          <div>
            {/* Cart Items: {cartItems.length} */}
            <CartRestaurant cartItems={cartItems} />


            {cartItems.length === 0 ? (

                // Empty cart UI
                <div className="flex flex-col items-center justify-center text-center h-[70vh]">

                    {/* Icons */}
                    <img src={emptyCart} alt="Empty Cart" className="w-52 mb-4 mt-12" />                    <h2 className="text-2xl font-bold text-gray-600">Your cart is Empty</h2>
                    <p className="text-gray-500 mt-2 font-semibold max-w-[250px]">Looks like you haven't added
                       any food to your cart yet!!
                    </p>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="px-6 py-3 mt-40 bg-[#FC8019] hover:bg-[#E46F12] cursor-pointer text-white font-semibold rounded-xl"
                    >
                        Brouser Restaurants
                    </button>
                </div>

            ) : (
                
                // Existing cart items
                <div>
                    {cartItems.map((item) => (
                <div key={item.id} className="relative flex items-center justify-between bg-gray-50 p-3 shadow-md rounded-xl mb-1">

                    <button 
                         onClick={() => removeFromCart(item.id)}
                         className="absolute right-2.5 top-7 text-xl font-bold text-red-500 cursor-pointer hover:text-red-700"
                    >  ×

                    </button>
                    
                    {/* left side */}
                    <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover"/>
                        <div>
                            <h3 className="font-semibold text-sm">{item.name}</h3>
                            <p className="text-gray.500">₹{item.price * item.quantity}/-</p>
                        </div>
                    </div>
                    {/* Quantity */}
                    <div className="flex items-center gap-2 mr-5">
                        <button 
                            className="w-8 h-8 bg-[#FC8019] cursor-pointer font-bold text-white"
                            onClick={() => decreaseQuantity(item.id)}
                            >-</button>
                        <span>Qty: {item.quantity}</span>
                        <button
                           onClick={() => addToCart(item)}
                           className="w-8 h-8 bg-[#FC8019] text-white cursor-pointer">+</button>
                    </div>
                </div>
            ))}

            {/* Bill section */}

            <div className="border-t mt-6 pt-6">
                <div className="flex justify-between mb-3">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium text-gray-800">₹{subtotal}</span>
                </div>

                <div className="flex justify-between mb-3">
                    <span className="text-gray-500">Delevery Fee</span>
                    <span className="text-gray-800 font-medium">₹{deleveryFee}</span>
                </div>

                <div className="flex justify-between mb-3 border-t pt-4 text-xl font-bold">
                    <span>Total</span>
                    <span className="text-[#FC8019]">₹{grandTotal}</span>
                </div>

                <button className="w-full mt-3 py-2 bg-[#FC8019] hover:bg-[#E46F12] cursor-pointer rounded-xl text-white font-bold transition">Checkout</button>
            </div>

                </div>
                

            )}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CartSidebar;