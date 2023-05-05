import "./App.css";

import { Route,Routes, Navigate } from "react-router-dom";

import LowerNavbar from "./Components/Navbar/LowerNavbar";
import Footer from "./Components/Footer/Footer"
import NewNavbar from "./development_test/dummyNavbar/test/NewNavbar";
// import LandingPage from "./Components/LandingPage/LandingPage";
import Extranavbar from "./Components/Navbar/Extranavbar";

import Login from "./Components/Login1/Login1/Login";
import SignUp from "./Components/Login1/SignUp/SignUp";
function App() {
  
  return (
    <div className="App">
   
      <Extranavbar/>
      <LowerNavbar/>
     
       <Routes>
          
         
   
      {/* <Route path="payment" element={<Payment/>}></Route> */}
     
      <Route path="login" element={<Login/>}></Route>
      <Route path="signup" element={<SignUp/>}></Route>
       </Routes>
       <Footer/>
       {/* </Router> */}
    </div>
  );
}

export default App;
