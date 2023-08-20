import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./Film_Flip.css";
import { NavLink } from "react-router-dom";
export default function FilmFlip(props) {
  return (
    <div className="flip-card mt-10">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={props.item.item.hinhAnh}
            alt="Avatar"
            style={{ width: 300, height: 300 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/300/300";
            }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <img
              src={props.item.item.hinhAnh}
              alt="Avatar"
              style={{ width: 300, height: 300 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontSize: "50px" }} />
              </div>
              <div className="text-2xl mt-2 font-bold">
                {props.item.item.tenPhim}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 text-violet-400 text-center cursor-pointer py-2 my-1 text-success-50 font-bold w-full">
        <NavLink to={`/Detail/${props.item.item.maPhim}`}>ĐẶT VÉ</NavLink>
      </div>
    </div>
  );
}
