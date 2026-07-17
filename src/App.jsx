import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Restaurentdetails from "./Pages/RestaurentDetails";
import Layout from "./Layout/Layout";
import { Toaster } from "react-hot-toast";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerStyle={{
        zIndex: 99999,
    }}
        toastOptions={{
          duration: 1800,
          style: {
            background: "#323232",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "15px",
            padding: "14px 18px",
            // zIndex: 99999,
          },
        }}
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:id" element={<Restaurentdetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
