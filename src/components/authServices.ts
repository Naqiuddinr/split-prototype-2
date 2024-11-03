import { confirmResetPassword, confirmSignUp, fetchAuthSession, resetPassword, signIn, signOut, signUp } from "aws-amplify/auth";


export async function userSignup(email: string, password: string) {
    try {

        await signUp({
            username: email,
            password,
        });
        return true;

    } catch (error: unknown) {

        const errorMessage: string = error instanceof Error ? error.message : "Unknown error occured";
        throw new Error(errorMessage);

    }
}

export async function userConfirmSignup(email: string, code: string) {
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

export async function userSignin(email: string, password: string) {
    try {

        await signIn({
            username: email,
            password
        });
        return true;

    } catch (error: unknown) {

        const errorMessage: string = error instanceof Error ? error.message : "Unknown error occured";
        throw new Error(errorMessage);

    }
}

export async function userForgotPassword(email: string) {
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

export async function userConfirmResetPassword(email: string, code: string, newPassword: string) {
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

export async function userSignout() {
    try {

        await signOut();

    } catch (error) {

        console.error('Error signing out:', error);

    }
}

export async function confirmCurrentUser() {
    try {
        return await fetchAuthSession();
    } catch {
        return null;
    }
}
