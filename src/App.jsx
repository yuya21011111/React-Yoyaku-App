import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"
import ProtectedRoute from "./components/ProtectedRoute"
import Spinner from "./components/Spinner"
import { useSelector } from "react-redux"
import AppFromMenu from "./pages/From/AppFromMenu"
import Admin from "./pages/Admin/Admin"
import Show from "./pages/Show/Show"


function App() {

  const { loading } = useSelector(state => state.loader)
  console.log(loading)
  return (
    <div>
      {loading && <Spinner />}
      <BrowserRouter>
        {/* Routesコンポーネントで複数のRouteをラッピングし、それぞれのルート(パス)に対応するコンポーネントを設定します。 */}
        <Routes>
          {/* ルートパス "/" は、Homeコンポーネントを表示します。ProtectedRouteラッパーを使って保護されたルートとして設定しています。 */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>

          {/* ログインページ用のルート "/login" で、Loginコンポーネントを表示します。 */}
          <Route path="/login" element={<Login />}></Route>

          {/* 登録ページ用のルート "/register" で、Registerコンポーネントを表示します。 */}
          <Route path="/register" element={<Register />}></Route>

          {/* プロフィールページ用のルート "/profile" は、Profileコンポーネントを表示します。これも保護されたルートです。 */}
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>

          {/* "apply-menu" パスで、AppFromMenuコンポーネントを表示します。このルートも保護されています。 */}
          <Route path="/apply-menu" element={<ProtectedRoute><AppFromMenu /></ProtectedRoute>}></Route>

          {/* 動的なパス "/show/:id" を使用して、Showコンポーネントを表示します。":id" は動的セグメントです。 */}
          <Route path="/show/:id" element={<ProtectedRoute><Show /></ProtectedRoute>}></Route>

          {/* 管理者ページ用のルート "/admin" で、Adminコンポーネントを表示します。このルートも保護されています。 */}
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
