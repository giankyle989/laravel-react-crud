import { Route, Routes } from "react-router-dom"
import { Login } from "./views/Login"
import NotFound from "./views/NotFound"
import Index from "./views/Index"
import Register from "./views/Register"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
