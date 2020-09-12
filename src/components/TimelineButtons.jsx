import React, { useState, useEffect, useContext } from "react";

import IndButton from "./IndButton";

export default function TimelineButtons(props) {
  return (
    <div className="flex flex-row mt-4 mb-4  ">
      <IndButton name="Last Month" queryVal="short_term" type={props.type} />
      <IndButton
        name="Last 6 months"
        queryVal="medium_term"
        type={props.type}
      />
      <IndButton name="All time" queryVal="long_term" type={props.type} />
    </div>
  );
}
