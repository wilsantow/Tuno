import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getTopArtists } from "../../lib/fetchAndParse";
import TopArtistCard from "../../components/TopArtistCard";
import banner from "../../assets/images/Top-Artists.jpg";
import HeaderImage from "../../components/HeaderImage";
export default function TopArtists() {
  useEffect(() => {
    getData();
  }, []);
  const [user, setUser] = useContext(UserContext);
  const getData = async (range) => {
    const TopArtists = await getTopArtists(range);
    const newartists = { ...user, topartists: TopArtists };
    setUser(newartists);
  };
  const changeTimeline = (range) => {
    console.log(range);
    const timeLine = { ...user };
    timeLine.range = range;
    setUser(timeLine);
    getData(range);
  };

  const artists = user.topartists;
  return (
    <div className="container mx-auto">
      <HeaderImage image={banner} />
      <div className="flex">
        <h1 className="font-bold mt-6 ml-4 text-gray-600 hover:text-black">
          <Link to="/">Top Tracks</Link>
        </h1>
        <h1 className="font-bold mt-6 ml-4">Top Artists</h1>
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
      {artists.map((artist, index) => (
        <TopArtistCard
          name={artist.artistName}
          genres={artist.genres[0]}
          rank={index + 1}
          art={artist.art}
          popularity={artist.popularity}
          key={artist.id}
        />
      ))}
    </div>
  );
}
