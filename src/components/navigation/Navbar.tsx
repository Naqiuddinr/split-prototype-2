import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header className="bg-black h-14 m-4 py-2 px-4 flex items-center rounded-full justify-between relative z-10">
                <div>
                    <h1 className="text-white">Tong2</h1>
                </div>
                <div>
                    {showMenu ? (
                        <div>
                            <CloseOutlinedIcon className="text-white cursor-pointer" onClick={() => setShowMenu(false)} />
                        </div>
                    ) : (
                        <MenuOutlinedIcon className="text-white cursor-pointer" onClick={() => setShowMenu(true)} />
                    )}
                </div>
            </header>

            <div
                className={`bg-black text-white transition-all duration-500 overflow-hidden`}
                style={{
                    height: showMenu ? '100px' : '0',
                    margin: '0 1rem', // Make sure the hidden div has the same margin as the header
                    padding: '1rem', // If you want padding inside the div
                }}
            >
                hello
            </div>
        </>


    )
}