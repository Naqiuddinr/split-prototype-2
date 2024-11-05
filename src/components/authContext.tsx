import { createContext, useEffect, useState, ReactNode } from 'react';
import { fetchAuthSession, getCurrentUser, type AuthUser } from 'aws-amplify/auth';

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: AuthUser | null;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    isLoading: true,
    user: null,
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<AuthUser | null>(null);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const authUser = await getCurrentUser();
            console.log(authUser);
            await fetchAuthSession(); // We keep the await to ensure session is valid

            setIsAuthenticated(true);
            setUser(authUser);
        } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        isAuthenticated,
        isLoading,
        user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


