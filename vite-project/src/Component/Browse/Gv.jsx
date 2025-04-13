import React from "react";
import { eleven } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function Gv() {
  const navigate = useNavigate();
  return (
    <>
     
      <div className="artist-container">
        <img src={eleven} onClick={() => navigate("/gv")} className='artist-photo '/>
        <h2>G v praksh</h2>
      </div>
    </>
  );
}

export default Gv;
