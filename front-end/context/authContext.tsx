import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api_sigmed } from "@/api/axios";

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}  

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await AsyncStorage.getItem("user")
            if (storedUser) setUser(JSON.parse(storedUser))
            setLoading(false)
        }
        loadUser()
    }, [])

    const login = async(email: string, password: string) => {
        try {
            const response = api_sigmed.get("/user/getall")
            const users: User[] = (await response).data

            const foundUser = users.find(
                (u: User) => u.email === email && u.password === password
            )

            if (!foundUser) throw new Error("E-mail ou senha inválidos.")

            await AsyncStorage.setItem("user", JSON.stringify(foundUser))
            setUser(foundUser)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
              } else {
                throw new Error("Ocorreu um erro desconhecido.");
              }
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem("user")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
  }