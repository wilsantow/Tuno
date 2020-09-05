import React from "react";

export default function TopArtistCard(props) {
  //console.log("props", props);
  return (
    <div className=" rounded-md flex flex-row mt-2 py-2 items-center hover:bg-gray-100 cursor-pointer">
      <h1 className="ml-4">{props.rank}</h1>
      <div className="ml-4  w-20 ">
        <img src={props.art} alt={props.name} className="  h-20 object-fill w-full rounded-md" />
      </div>
      <div className=" ml-12 flex flex-col ">
        <h1 className="font-bold">{props.name}</h1>
        <h1>{props.genres}</h1>
      </div>
      <p className="ml-auto mr-4">{props.popularity}</p>
    </div>
  );
}
