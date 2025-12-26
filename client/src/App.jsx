import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import UserDashboard from "./Pages/UserDashboard";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user-dashboard" element={<UserDashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
