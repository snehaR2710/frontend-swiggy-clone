// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RestaurentProvider from "./Context/RestaurentContext.jsx";
import CartProvider from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <RestaurentProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </RestaurentProvider>,
);
