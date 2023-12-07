import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"
import ProtectedRoute from "./components/ProtectedRoute"
import Spinner from "./components/Spinner"

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Spinner />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
