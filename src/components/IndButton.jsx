import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { getTopArtists, getTopTracks } from "../lib/fetchAndParse";

export default function IndButton(props) {
  const [user, setUser] = useContext(UserContext);

  async function changeTimeline(type, range) {
    const timeLine = { ...user };
    timeLine.range = range;
    setUser(timeLine);
    setUser({ ...user, isloading: true });
    if (type == "tracks") {
      getTracksData(range);
    } else {
      getArtistsData(range);
    }
    setUser({ ...user, isloading: false });
  }

  const getArtistsData = async (range) => {
    const TopArtists = await getTopArtists(range);
    const newartists = { ...user, topartists: TopArtists };
    setUser(newartists);
  };

  const getTracksData = async (range) => {
    const topTracks = await getTopTracks(range);
    const newtracks = { ...user, toptracks: topTracks };
    setUser(newtracks);
  };

  return (
    <button
      className="ml-4 font-semibold p-2 focus:outline-none hover:bg-gray-300 rounded-md"
      onClick={() => {
        changeTimeline(props.type, props.queryVal);
      }}
    >
      {props.name}
    </button>
  );
}
