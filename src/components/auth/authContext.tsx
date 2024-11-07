import { createContext, useEffect, useState, ReactNode } from 'react';
import {
    confirmResetPassword,
    confirmSignUp,
    fetchAuthSession,
    getCurrentUser,
    resetPassword,
    signIn,
    signOut,
    signUp,
    type AuthUser
} from 'aws-amplify/auth';

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: AuthUser | null;
    error: string | null;
    setError: (error: string | null) => void;
    userSignin: (email: string, password: string) => Promise<boolean>;
    userSignup: (email: string, password: string) => Promise<boolean>;
    userConfirmSignup: (email: string, password: string) => Promise<boolean>;
    userForgotPassword: (email: string) => Promise<boolean>;
    userConfirmResetPassword: (email: string, code: string, newPassword: string) => Promise<boolean>;
    userSignout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
    setError: () => { },
    userSignin: async () => false,
    userSignup: async () => false,
    userConfirmSignup: async () => false,
    userForgotPassword: async () => false,
    userConfirmResetPassword: async () => false,
    userSignout: async () => false,
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<AuthUser | null>(null);
    const [error, setError] = useState<string | null>(null);

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

    const userSignin = async (email: string, password: string) => {
        try {
            await signIn({ username: email, password });
            setIsAuthenticated(true);
            setUser(await getCurrentUser());
            return true;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    const userSignup = async (email: string, password: string) => {
        try {
            await signUp({ username: email, password });
            return true;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    }

    const userConfirmSignup = async (email: string, code: string) => {
        try {

            await confirmSignUp({
                username: email,
                confirmationCode: code,
            })
            return true;

        } catch (error: unknown) {

            const errorMessage: string = error instanceof Error ? error.message : "Unknown error occured";
            throw new Error(errorMessage);

        }
    }

    const userForgotPassword = async (email: string) => {
        try {

            await resetPassword({
                username: email,
            })
            return true;

        } catch (error: unknown) {

            const errorMessage: string = error instanceof Error ? error.message : "Unknown error occured";
            throw new Error(errorMessage);

        }
    }

    const userConfirmResetPassword = async (email: string, code: string, newPassword: string) => {
        try {

            await confirmResetPassword({
                username: email,
                confirmationCode: code,
                newPassword
            })
            return true;

        } catch (error: unknown) {

            const errorMessage: string = error instanceof Error ? error.message : "Unknown error occured";
            throw new Error(errorMessage);

        }
    }

    const userSignout = async () => {
        try {

            await signOut();

        } catch (error) {

            console.error('Error signing out:', error);

        }
    }

    const value = {
        isAuthenticated,
        isLoading,
        user,
        error,
        setError,
        userSignin,
        userSignup,
        userConfirmSignup,
        userForgotPassword,
        userConfirmResetPassword,
        userSignout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


