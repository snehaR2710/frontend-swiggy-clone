import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import CartSidebar from "../Component/Cart/CartSidebar";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Footer from "../Footer/Footer";

function Layout() {
// Cart sidebar ka open/close state - ab yahan hai, kisi ek page ke andar nahi
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <>
     <Navbar cartItems={cartItems} setIsCartOpen={setIsCartOpen} />

            <CartSidebar
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                cartItems={cartItems}
                addToCart={addToCart}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
            />
            {/* Yahan par current page (HomePage ya Restaurentdetails) render hoga */}
            <Outlet />

            <Footer />

    </>
  );
}

export default Layout;