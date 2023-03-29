import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "../src/Components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Pages/Products/Products";
import { Navigate } from "react-router-dom";
 
function App() {
  return (
    <>
      {" "}<Navbar /> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="Products" element={<Products />} />       
        <Route path="*" element={<Navigate to="/Home"/>}/>       
        </Routes>
    
    </>
  );
}

export default App;
