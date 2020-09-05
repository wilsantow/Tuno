import React from "react";
export default function HeaderImage(props) {
  return (
    <div className="  mx-auto h-58">
      <img
        src={props.image}
        className="  object-cover h-56 w-full rounded-md"
      ></img>
    </div>
  );
}
