import { useState, useRef, useEffect } from "react";
import { User, LogOut, ShoppingBag } from "lucide-react";


function UserMenu({ username = "User" }) {

    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handelClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handelClickOutside);

        return () => document.removeEventListener("mousedown", handelClickOutside);
    }, [])

    return (
        <div
            ref={menuRef}
            className="relative"
        >
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition"
            >
                <User className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">
                    {username}
                </span>
            </button>


            {open && (
                <div className="absolute right-0 mt-2 w-44 rounded-lg bg-white shadow-lg border border-gray-100 overflow-hidden z-50">
                    <MenuItem label="Profile" />
                    <MenuItem label="Orders" icon={<ShoppingBag className="w-4 h-4" />} />
                    <MenuItem
                        label="Logout"
                        icon={<LogOut className="w-4 h-4" />}
                        danger={true}
                    />
                </div>
            )}
        </div>
    )
}

function MenuItem({ label, icon, danger }) {
  return (
    <button
      className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left 
        ${danger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-100"}
      `}
    >
      {icon}
      {label}
    </button>
  );
}

export default UserMenu