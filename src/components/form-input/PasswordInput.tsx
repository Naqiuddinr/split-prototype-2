

interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {

    return (
        <div className="relative">
            <input
                id="hs-toggle-password"
                type="password"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={value}
                onChange={(e) => onChange(e.target.value)} />
            <button type="button" data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
                <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                    <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                </svg>
            </button>
        </div>
    );
};
