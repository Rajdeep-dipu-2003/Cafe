import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

function UserLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout
