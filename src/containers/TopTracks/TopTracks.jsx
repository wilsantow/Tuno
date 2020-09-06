import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getTopTracks } from "../../lib/fetchAndParse";
import TopTrackCard from "../../components/TopTrackCard";
import HeaderImage from "../../components/HeaderImage";
import banner from "../../assets/images/top-tracks.jpg";

export default function TopTracks() {
  useEffect(() => {
    getData();
  }, []);
  const [user, setUser] = useContext(UserContext);
  const getData = async (range) => {
    const topTracks = await getTopTracks(range);
    console.log("top tracks from function", topTracks);
    const newtracks = { ...user, toptracks: topTracks };
    // newtracks.toptracks = [ topTracks];
    setUser(newtracks);
    console.log("state after tracks", user);
  };
  const tracks = user.toptracks;
  const changeTimeline = (range) => {
    console.log(range);
    const timeLine = { ...user };
    timeLine.range = range;
    setUser(timeLine);
    getData(range);
  };

  const trackList = tracks.map((track, index) => (
    <TopTrackCard
      name={track.name}
      artist={track.artist}
      rank={index + 1}
      art={track.art}
      popularity={track.popularity}
      key={track.id}
    />
  ));

  return (
    <div className="container mx-auto ">
      <HeaderImage image={banner} />
      <div className="flex">
        <h1 className="font-bold mt-6 ml-4">Top Tracks</h1>
        <h1 className="font-bold mt-6 ml-4 text-gray-600 hover:text-black">
          <Link to="/top-artists">Top Artists</Link>
        </h1>
      </div>
      <div className="flex flex-row mt-4 mb-4  ">
        <button
          className="ml-4 font-semibold p-2 focus:outline-none hover:bg-gray-300 rounded-md"
          onClick={() => {
            changeTimeline("short_term");
          }}
        >
          Last month
        </button>
        <button
          className="ml-4 font-semibold p-2 focus:outline-none hover:bg-gray-300 rounded-md"
          onClick={() => {
            changeTimeline("medium_term");
          }}
        >
          Last 6 months
        </button>
        <button
          className="ml-4 font-semibold p-2 focus:outline-none hover:bg-gray-300 rounded-md"
          onClick={() => {
            changeTimeline("long_term");
          }}
        >
          All time
        </button>
      </div>
      <div>{trackList}</div>
    </div>
  );
}
