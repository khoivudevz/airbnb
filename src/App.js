import "antd/dist/antd.css";
import "./App.css";
import { BsArrowUpShort } from "react-icons/bs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLayout from "./template/HomeLayout";
import NotFound from "./pages/NotFound/NotFound";
import { BackTop } from "antd";
import Layout from "./template/Layout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import DetailUser from "./pages/DetailUser/DetailUser";
import AllLocation from "./pages/AllLocation/AllLocation";
import MobileUserSelect from "./pages/MobileUserSelect/MobileUserSelect";
import DetailRoom from "./pages/DetailRoom/DetailRoom";
import BookedRoomList from "./pages/BookedRoomList/BookedRoomList";
import AdminLayout from "./template/AdminLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <BackTop className="animate-bounce">
          <div className="bg-hotpink hover:bg-white text-white hover:text-hotpink transition-all hover:shadow-xl px-3 py-3 rounded-full flex items-center justify-center absolute -top-20">
            <BsArrowUpShort size={40} />
          </div>
        </BackTop>
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
          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
