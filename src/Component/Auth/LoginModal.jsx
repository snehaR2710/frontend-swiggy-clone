import { X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import loginChef from "../../assets/Chef.gif"

function LoginModal({ onClose }) {
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (name.trim().length < 2) {
      toast.error("Enter a valid name");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Enter a valid mobile number");
      return;
    }

    login({
      name,
      phone,
    });

    toast.success(`Welcome ${name}!`);
    onClose();
  }

  return (
    <>
      {/* Background */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-screen w-full md:w-[560px] bg-white z-50 overflow-y-auto">

        <div className="h-full flex flex-col p-10">

          {/* Header */}
          <div className="flex justify-between items-start">

            {/* Left */}
            <div>

              <button
                onClick={onClose}
                className="cursor-pointer"
              >
                <X size={30} />
              </button>

              <h1 className="text-4xl font-bold mt-8">
                Login
              </h1>

              <p className="mt-3 text-gray-600">
                or{" "}
                <span className="text-[#FC8019] font-semibold cursor-pointer">
                  create an account
                </span>
              </p>

              <div className="w-10 h-[2px] bg-black mt-6"></div>

            </div>

            {/* Right */}
            <div className="hidden md:block">

              <img
                src={loginChef}
                alt="Chef"
                className="w-50 h-50 object-contain"
              />
              

            </div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="space-y-5 mt-10"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-5 outline-none focus:border-[#FC8019]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 px-5 py-5 text-lg outline-none focus:border-[#FC8019] transition-colors"
            />

            <button
              className="w-full bg-[#FC8019] text-white py-5 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              LOGIN
            </button>

          </form>

          {/* Footer */}
          <p className="text-sm text-gray-500 leading-6 mt-6">
            By clicking on Login, I accept the {" "} 
            <span className="font-semibold text-black">
                Terms & Conditions
            </span>
            {" "} and {" "}
            <span className="font-semibold text-black">Privacy Policy</span>.
          </p>

        </div>

      </div>
    </>
  );
}

export default LoginModal;