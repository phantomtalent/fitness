import React from "react";
import "../../app.css";

const MarkerIcon = ({ style }) => {
  return (
    <svg
      className="marker-icon"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="40px"
      height="40px"
      viewBox="0 0 512 512"
      style={style}
    >
      <g>
        <path d="M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375   C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96   c53,0,96,43,96,96S309,256,256,256z" />
      </g>
    </svg>
  );
};

export default MarkerIcon;
