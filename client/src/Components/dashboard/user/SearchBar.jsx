import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";



function SearchBar() {
    return (
        <div className="w-full h-16 bg-red-100 flex items-center justify-center">
            <div className="relative w-full max-w-xl px-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="
                        w-full
                        h-11
                        pl-4
                        pr-12
                        rounded-full
                        bg-white
                        text-gray-800
                        placeholder-gray-400
                        shadow-sm
                        focus:outline-none
                        focus:ring-2
                        focus:ring-red-300
                        transition
                    "
                />

                {/* Microphone Icon */}
                <button
                    type="button"
                    className="
                        absolute
                        right-6
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                        hover:text-red-500
                        transition
                    "
                >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
