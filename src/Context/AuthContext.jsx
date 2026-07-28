import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const saveUser = localStorage.getItem("user")

        if(saveUser) {
            setUser(JSON.parse(saveUser))
        }
    }, [])

    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData))
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
    }

    return (
        <AuthContext.Provider
           value={{
            user,
            login,
            logout
           }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)