import React from "react";
import { logo } from "../assets/assets"; 
import { useNavigate } from "react-router-dom";

function Navbar({}) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" onClick={() => navigate("/home")}/>
      <form autoComplete="off">
        <label htmlFor="search">Search</label>
        <input id="search" type="search" placeholder="Search the song" onChange={(e)=>onSearch(e.target.value)}/>
      </form>
      <div>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Create an Account</button>
      </div>
    </div>
  );
}

export default Navbar;
