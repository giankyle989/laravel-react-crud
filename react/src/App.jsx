import { Route, Routes } from "react-router-dom"
import { Login } from "./views/Login"
import NotFound from "./views/NotFound"
import Register from "./views/Register"
import GuestLayout from "./components/GuestLayout"
import Dashboard from "./views/Dashboard"
import Index from "./views/Index"
import UserLayout from "./components/UserLayout"
import Users from "./views/Users"

function App() {

  return (
    <>
      <Routes>
        
        {/**Guest Layout Routes */}
        <Route path="/" element={<GuestLayout/>}>
          <Route path="/" element={<Index/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>

        {/**Logged-in User Layout */}
        <Route path="/" element={<UserLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
        </Route>







        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
