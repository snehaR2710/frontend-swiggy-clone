import toast from "react-hot-toast";
import { useAuth } from "../../Context/AuthContext";
import { LogOut } from "lucide-react";

function UserMenu({ onClose }) {
    const {user, logout} = useAuth()

    function handleLogout() {
        logout()
        toast.success("Logged out successfully")
        onClose();
    }

    return(
        <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border z-50">
            <div className="p-4 border-b">
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{user.phone}</p>
            </div>

            <button 
              onClick={handleLogout} 
              className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-100 transition cursor-pointer">
                <LogOut size={18}/> Logout
            </button>

        </div>
    )

}

export default UserMenu;