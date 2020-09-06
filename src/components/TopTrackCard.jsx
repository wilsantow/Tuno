import React from "react";
import { motion } from "framer-motion";

export default function TopTrackCard(props) {
  //console.log("props", props);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=" rounded-md flex flex-row mt-2 py-2 items-center hover:bg-gray-100 cursor-pointer"
    >
      <h1 className="ml-4">{props.rank}</h1>
      <div className="ml-4 w-20">
        <img
          src={props.art}
          alt={props.name}
          className="h-20 object-fill w-full rounded-md"
        />
      </div>
      <div className=" ml-12 flex flex-col ">
        <h1 className="font-bold">{props.name}</h1>
        <h1>{props.artist}</h1>
      </div>
      <p className="ml-auto mr-4 hidden sm:inline">{props.popularity}</p>
    </motion.div>
  );
}
