import React from "react";
import "../../Style/Style.css";
import {eight,nine,ten,eleven} from '../../assets/assets'
import { useNavigate } from "react-router-dom";

function Artist() {
  const navigate = useNavigate()
  const album = [{img:eight,path:'/ar'},
  {img:nine,path:'/harish'},
  {img:ten,path:'/yuvan'},
  {img:eleven,path:'/gv'},];
  return (
    <>
    <div className="artist ">
        <div className="albumimg">
          {album.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`Album ${index + 1}`}
              className="album-photo"
              onClick={() => navigate(item.path)} 
              style={{ cursor: "pointer" }}
            />
          ))}
          </div>
     </div>
     
    </>
  );
}

export default Artist;
