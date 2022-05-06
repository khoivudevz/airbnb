import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLayout from "./template/HomeLayout";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./template/Layout";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import DetailUser from "./Components/DetailUser/DetailUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout Components={Home} />} />
          <Route path="*" element={<Layout Components={NotFound} />} />
          <Route path="/login" element={<Layout Components={Login} />} />
          <Route path="/signup" element={<Layout Components={Signup} />} />
          <Route path="/user" element={<Layout Components={DetailUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
