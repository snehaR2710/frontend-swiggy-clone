import { X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import toast from "react-hot-toast";

function LoginModal({ onClose }) {
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (name.trim().length < 2) {
      toast.error("Enter a valid name")
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Enter a valid mobile number")
      return;
    }

    login({
      name,
      phone,
    });

    toast.success(`Welcome ${name}!`)

    onClose();
  }

  return (
    <>
      {/* Dark Background */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      {/* Right Drawer */}
      <div className="fixed right-0 top-0 h-screen w-full md:w-[520px] bg-white z-50 p-10 overflow-auto">

        {/* Close */}

        <button
          onClick={onClose}
          className="cursor-pointer"
        >
          <X size={30} />
        </button>

        <h1 className="text-4xl font-bold mt-8">
          Login
        </h1>

        <p className="mt-3">
          or{" "}
          <span className="text-[#FC8019] font-semibold">
            create an account
          </span>
        </p>

        <div className="w-10 h-[2px] bg-black mt-6 mb-10"></div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-5 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full border p-5 outline-none"
          />

          <button
            className="w-full bg-[#FC8019] text-white py-5 font-bold cursor-pointer hover:bg-orange-600 transition"
          >
            LOGIN
          </button>
        </form>

        <p className="text-sm mt-6 text-gray-600 leading-6">
          By clicking Login, I accept the
          Terms & Conditions &
          Privacy Policy.
        </p>
      </div>
    </>
  );
}

export default LoginModal;