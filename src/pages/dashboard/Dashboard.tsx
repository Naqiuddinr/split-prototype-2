import { signOut, fetchAuthSession } from "aws-amplify/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            try {
                const session = await fetchAuthSession();

                if (!session) {
                    navigate("/login");
                }
            } catch (error) {
                console.error("Failed to fetch session", error);
                navigate("/login");
            }
        };

        checkSession();
    }, [navigate]);

    const handleSignout = async () => {
        await signOut();
        navigate("/login");
    };

    return (
        <>
            <div>Dashboard</div>
            <button
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSignout}
            >
                Sign Out
            </button>
        </>
    );
}
