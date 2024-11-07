import { useState } from "react";
import { resetPassword } from 'aws-amplify/auth';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/auth/useAuth";


export default function ResetPassword() {

    const { userConfirmResetPassword, error, setError } = useAuth();

    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get('email') || "";

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {

            await userConfirmResetPassword(email, code, newPassword)
            navigate("/login");

        } catch (error: unknown) {
            console.error(error);
        }
    }

    const handleResendCode = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        try {

            await resetPassword({
                username: email,
            })

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
                        Reset Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleResetPassword} className="space-y-6">
                        <div>
                            <label htmlFor="code" className="flex justify-start text-sm font-medium leading-6 text-gray-900">
                                Verification Code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    New Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="newPassword"
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm New Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
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
                                Submit
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
