import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLayout from "./template/HomeLayout";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./template/Layout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import DetailUser from "./pages/DetailUser/DetailUser";
import AllLocation from "./pages/AllLocation/AllLocation";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import MobileUserSelect from "./pages/MobileUserSelect/MobileUserSelect";
import DetailRoom from "./pages/DetailRoom/DetailRoom";
import BookedRoomList from "./pages/BookedRoomList/BookedRoomList";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminHome from "./pages/Admin/AdminHome/AdminHome";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLayout Components={Home} />} />
          <Route path="*" element={<Layout Components={NotFound} />} />
          <Route path="/login" element={<Layout Components={Login} />} />
          <Route path="/signup" element={<Layout Components={Signup} />} />
          <Route
            path="/user/:id"
            element={<Layout Components={DetailUser} />}
          />
          <Route path="/rooms" element={<Layout Components={AllLocation} />} />
          <Route
            path="/room/:id"
            element={<Layout Components={DetailRoom} />}
          />
          <Route
            path="/booked/:id"
            element={<Layout Components={BookedRoomList} />}
          />
          <Route
            path="/muser"
            element={<Layout Components={MobileUserSelect} />}
          />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/home" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
