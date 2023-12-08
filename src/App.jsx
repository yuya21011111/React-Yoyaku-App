import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"
import ProtectedRoute from "./components/ProtectedRoute"
import Spinner from "./components/Spinner"
import { useSelector } from "react-redux"
import AppFromMenu from "./pages/From/AppFromMenu"


function App() {

  const { loading } = useSelector(state => state.loader)
  console.log(loading)
  return (
    <div>
      { loading && <Spinner /> }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
          <Route path="/apply-menu" element={<ProtectedRoute><AppFromMenu /></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
