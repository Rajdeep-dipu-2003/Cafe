import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import CartButton from "./CartButton";

function Navbar() {
    return (
        <div
            className="
                w-full h-16 bg-red-100
                grid grid-cols-3
                items-center
                px-6
            "
        >

            {/* Left spacer */}
            <div />

            {/* Center */}
            <div className="flex justify-center">
                <SearchBar />
            </div>

            {/* Right */}
            <div className="flex justify-end items-center gap-2">
                <CartButton />
                <UserMenu />
            </div>

        </div>
    );
}

export default Navbar;
