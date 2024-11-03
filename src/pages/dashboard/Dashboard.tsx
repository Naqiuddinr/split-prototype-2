import { useEffect } from "react";
import { confirmCurrentUser, userSignout } from "../../components/authServices";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            try {
                const session = await confirmCurrentUser();
                console.log("Session:", session);

                if (!session?.tokens) {
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

        await userSignout();
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
