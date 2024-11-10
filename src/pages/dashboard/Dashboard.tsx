import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/auth/useAuth";
import { Button } from "@mui/material";
import Navbar from "../../components/navigation/Navbar.tsx"

export default function Dashboard() {

    const { userSignout } = useAuth();

    const navigate = useNavigate();

    const handleSignout = async () => {

        await userSignout();
        navigate("/login");

    };

    return (
        <>
            <Navbar />
            <Button variant="contained" style={{ backgroundColor: "black" }} onClick={handleSignout}>Sign Out</Button>
        </>
    );
}
