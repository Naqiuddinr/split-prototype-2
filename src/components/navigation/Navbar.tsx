import {
    AppBar,
    Box,
    // Button,
    Drawer,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material';
// import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useAuth } from '../auth/useAuth';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {

    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none", borderBottom: "1px solid #e5e7eb" }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
                            Tong2
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            onClick={() => setShowDrawer(!showDrawer)}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <SettingDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
            {/* <SwipeableDrawer onClose={ } onOpen={ } /> */}
        </>
    )
}

interface SettingDrawerProps {
    showDrawer: boolean;
    setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function SettingDrawer({ showDrawer, setShowDrawer }: SettingDrawerProps) {

    const { userSignout } = useAuth();

    const navigate = useNavigate();

    const handleSignout = async () => {

        await userSignout();
        navigate("/login");

    };

    return (
        <>
            <Drawer
                anchor='bottom'
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
            >
                <Box sx={{ width: 'auto', height: '20vh' }} className="flex justify-center items-center">
                    <button
                        onClick={handleSignout}
                        className="w-1/2 rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Logout
                    </button>
                </Box>
            </Drawer>
        </>
    )
}