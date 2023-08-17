import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null };
    onRegister?: (email: string, password: string) => Promise<any>;
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "token";
export const API_URL = "https://api.developbetterapps.com";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({ token: null, authenticated: null });

    const register = async (email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/users`, {
                email,
                password,
            });
        } catch (error) {
            console.log(error);
            return { error: true, msg: (error as any).message.data.msg };
        }
    };

    // Loading token from storage
    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await SecureStore.getItemAsync(TOKEN_KEY);
                
                if (token) {
                    setAuthState({
                        token,
                        authenticated: true,
                    });

                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                } else {
                    setAuthState({
                        token: null,
                        authenticated: false,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };
        loadToken();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const result = await axios.post(`${API_URL}/auth`, {
                email,
                password,
            });

            console.log(":rocket: ~ file: AuthContext.tsx:43 ~ login ~ result", result)

            setAuthState({
                token: result.data.token,
                authenticated: true,
            });

            axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.token}`;

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

            return result;

        } catch (error) {
            console.log(error);
            return { error: true, msg: (error as any).message.data.msg };
        }
    };

    const logout = async () => {
        // Delete token from storage
        await SecureStore.deleteItemAsync(TOKEN_KEY);

        // Update HTTP Headers
        delete axios.defaults.headers.common["Authorization"];

        // Reset Auth Context
        setAuthState({
            token: null,
            authenticated: false,
        });
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}