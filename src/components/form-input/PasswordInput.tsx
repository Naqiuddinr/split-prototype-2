import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from 'react';

interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 p-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <span className="absolute inset-y-0 right-2 flex items-center">
                <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                        <VisibilityOutlinedIcon sx={{ color: "grey" }} fontSize="small" />
                    ) : (
                        <VisibilityOffOutlinedIcon sx={{ color: "grey" }} fontSize="small" />
                    )}
                </button>
            </span>
        </div>
    );
};
