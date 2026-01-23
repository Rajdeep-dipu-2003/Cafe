import Navbar from "../Components/dashboard/user/Navbar/Navbar.jsx"
import CategoryFilter from "../Components/dashboard/user/CategoryFilter/CategoryFilter.jsx"
import PopularItemsFilter from "../Components/dashboard/user/PopularItems/PopularItemsFilter.jsx"

function UserDashboard() {
    return <>
        <div
            className="flex flex-col items-center justify-center"
        >
            <CategoryFilter />
            <PopularItemsFilter/>
        </div>
    </>
}

export default UserDashboard