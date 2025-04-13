import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar">
        <button onClick={() => navigate("/home")}>
          <h3>
            <FaHome /> Home
          </h3>
        </button>
        <button onClick={() => navigate("/browse")}>
          <h3>
            <FaSearch />
            Browse
          </h3>
        </button>
        <button onClick={() => navigate("/radio")}>
          <h3>
            <FaRadio /> Radio
          </h3>
        </button>
      </div>
    </>
  );
}

export default Sidebar;
