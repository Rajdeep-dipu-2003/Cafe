import Navbar from "../Components/dashboard/user/Navbar/Navbar.jsx"
import CategoryFilter from "../Components/dashboard/user/CategoryFilter/CategoryFilter.jsx"

function UserDashboard() {
    return <>
        <div
            className="flex flex-col items-center justify-center"
        >
            <Navbar />
            <CategoryFilter />
        </div>
    </>
}

export default UserDashboard