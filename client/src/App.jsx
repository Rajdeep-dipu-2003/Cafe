import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import UserDashboard from "./Pages/UserDashboard";
import AdminLogin from "./Components/dashboard/admin/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import ProductView from "./Components/dashboard/user/ProductsView/ProductsView";
import Cart from "./Components/dashboard/user/Cart/Cart";
import Authentication from "./Components/dashboard/user/Authentication/Authentication";
import UserLayout from "./Components/dashboard/user/UserLayout";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/admin">
          <Route path="login" element={<AdminLogin/>}/>
          <Route path="dashboard" element={<AdminDashboard/>}/>
        </Route>

        <Route path="/user" element={<UserLayout/>}>
          <Route path="dashboard" element={<UserDashboard/>}/>
          <Route path="view-products" element={<ProductView/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="authenticate" element={<Authentication/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
