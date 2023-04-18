import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "../src/Components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Pages/Products/Products";
import { Navigate } from "react-router-dom";
import Login from "./Pages/Login/login";
import SignUp from "./Pages/Signup/SignUp";
 
function App() {
  return (
    <>
      {" "}<Navbar /> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="Products" element={<Products />} />       
        <Route path="Login" element={<Login />} />       
        <Route path="SignUp" element={<SignUp />} />       
        <Route path="*" element={<Navigate to="/Home"/>}/>       
        </Routes>
    
    </>
  );
}

export default App;
