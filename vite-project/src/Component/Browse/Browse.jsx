import React from "react";
import Artist from "./Artist";
import { useNavigate } from "react-router-dom";

function Browse() {
    const navigate = useNavigate()
  return (
    <>
      <div>
        <Artist/>
      </div>
    </>
  );
}

export default Browse;
