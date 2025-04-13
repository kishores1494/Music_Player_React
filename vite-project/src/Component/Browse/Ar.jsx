import React from "react";
import { useNavigate } from "react-router-dom";
import { eight } from "../../assets/assets";

function Ar() {
  const navigate = useNavigate();

  return (
    <div className="artist-container">
      
      <img
        src={eight}
        alt="A. R. Rahman"
        className="artist-photo"
        // onClick={() => navigate("/")}
        style={{ cursor: "pointer", width: "200px", borderRadius: "10px" }}
      />

      
      <h2>A. R. Rahman</h2>

     
      {/* <button onClick={() => navigate("/")}>Back to Artists</button> */}
    </div>
  );
}

export default Ar;
