import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resendSignUpCode } from 'aws-amplify/auth';
import { userConfirmSignup } from "../../components/authServices";


export default function VerifyEmail() {

    const [code, setCode] = useState("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get('email') || "";

    const handleVerifyEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {

            await userConfirmSignup(email, code);
            navigate("/login");

        } catch (error: unknown) {

            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            setError(errorMessage);
            console.error(error);

        }
    }

    const handleResendCode = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {

            await resendSignUpCode({ username: email });
            alert("Verification code has been resent to your email.");

        } catch (error: unknown) {

            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            setError(errorMessage);
            console.error(error);

        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Please check your email
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleVerifyEmail} className="space-y-6">
                        <div>
                            <label htmlFor="verify-code" className="flex justify-start text-sm font-medium leading-6 text-gray-900">
                                Confirmation Code
                            </label>
                            <div className="mt-2">
                                <input
                                    name="verify-code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            {error && <p className="text-center text-red-500 text-sm">{error}</p>}
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-slate-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Confirm
                            </button>
                            <div className="mt-6">
                                <a className="flex w-full justify-center rounded-md hover:bg-slate-100 px-3 py-1.5 text-sm font-semibold text-black" onClick={handleResendCode}>Resend Code</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
