import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./assets/pages/home"
import Sign_up from "./assets/pages/signup"
import Log_in from "./assets/pages/login"
import SinglePost from "./assets/pages/singlepost"
import Home2 from "./assets/pages/home2"
import CreatePost from "./assets/pages/createPost"
import Profile from "./assets/pages/profile"
import Dashboard from "./assets/admin/Dashboard"
import Users from "./assets/admin/users"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/login" element={<Log_in />} />
        <Route path="/singlepost/:id" element={<SinglePost />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App