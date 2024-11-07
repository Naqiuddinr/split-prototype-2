import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/auth/useAuth";


export default function ForgotPassword() {

    const { userForgotPassword, error, setError } = useAuth();

    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {

            await userForgotPassword(email);
            navigate(`/reset-password?email=${encodeURIComponent(email)}`);

        } catch (error: unknown) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Reset Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleForgotPassword} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="flex justify-start text-sm font-medium leading-6 text-gray-900">
                                Enter your registered Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                Send Code
                            </button>
                            <div className="mt-6">
                                <a className="flex w-full justify-center rounded-md hover:bg-slate-100 px-3 py-1.5 text-sm font-semibold text-black" href="/login">Back to Login</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
