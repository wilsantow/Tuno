import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getTopTracks } from "../../lib/fetchAndParse";
import TopTrackCard from "../../components/TopTrackCard";
import HeaderImage from "../../components/HeaderImage";
import banner from "../../assets/images/top-tracks.jpg";
import TimelineButtons from "../../components/TimelineButtons";

export default function TopTracks() {
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    setUser({ ...user, isloading: true });
    getData();
    setUser({ ...user, isloading: false });
  }, []);

  const getData = async (range) => {
    const topTracks = await getTopTracks(range);
    console.log("top tracks from function", topTracks);
    const newtracks = { ...user, toptracks: topTracks };
    setUser(newtracks);
  };
  const tracks = user.toptracks;

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
        <h1 className="font-bold mt-6 ml-4 text-gray-600 hover:text-black active:underline">
          <Link to="/top-artists">Top Artists</Link>
        </h1>
      </div>
      <TimelineButtons type="tracks" />
      {user.isloading && (
        <div>
          <h1>loading</h1>
        </div>
      )}
      {!user.isloading && <div>{trackList}</div>}
    </div>
  );
}
