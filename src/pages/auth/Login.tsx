import { useState } from "react"
import { userSignin } from "../../components/authServices";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {

            await userSignin(email, password);
            navigate("/");

        } catch (error: unknown) {

            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            setError(errorMessage);
            console.error(error);

        } finally {

            setEmail("");
            setPassword("");

        }
    };

    const navigateSignup = () => {
        navigate("/signup")
    }

    const navigateForgotPassword = () => {
        navigate("/forgotpassword")
    }


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSignin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="flex justify-start text-sm font-medium leading-6 text-gray-900">
                                Email address
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
                                    className="p-1.5 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mt-2 flex justify-end">
                                <p className="text-sm text-slate-500">
                                    <a className="underline text-indigo-600 hover:text-indigo-500 hover:cursor-pointer" onClick={navigateForgotPassword}>Forgot Password</a>
                                </p>
                            </div>
                        </div>

                        <div>
                            {error && <p className="text-center text-red-500 text-sm">{error}</p>}
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-slate-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign In
                            </button>
                            <div className="mt-10">
                                <p className="text-sm text-slate-500">
                                    Don&apos;t have an account? Register <a className="underline text-indigo-600 hover:text-indigo-500 hover:cursor-pointer" onClick={navigateSignup}>here!</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
