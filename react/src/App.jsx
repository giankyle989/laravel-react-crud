import { Route, Routes } from "react-router-dom"
import { Login } from "./views/Login"
import Signup from "./views/SIgnup"
import NotFound from "./views/NotFound"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
