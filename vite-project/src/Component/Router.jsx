import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Home/Home";
// import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
import "../Style/Style.css";
import Ar from "./Browse/Ar";
import Harish from "./Browse/Harish";
import Yuvan from "./Browse/Yuvan";
import Gv from "./Browse/Gv";
import Radio from "./Radio/Radio";
import Browse from "./Browse/Browse";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Body />
              </>
            }
          />
          <Route path="/home" element={<Body />} />
          <Route path="/browse" element={<Browse />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ar" element={<Ar />} />
          <Route path="/harish" element={<Harish />} />
          <Route path="/yuvan" element={<Yuvan />} />
          <Route path="/gv" element={<Gv />} />
          <Route path="/radio" element={<Radio />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default AppRouter;
