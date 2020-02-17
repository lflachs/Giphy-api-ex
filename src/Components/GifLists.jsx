import React from "react";
import Gif from "./Gif";
import "./gif.css";

function GifLists({ gifs }) {
  return (
    <div className="gif-list">
      {gifs.map(element => {
        return <Gif gif={element} />;
      })}
    </div>
  );
}
export default GifLists;
