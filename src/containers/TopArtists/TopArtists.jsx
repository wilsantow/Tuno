import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getTopArtists } from "../../lib/fetchAndParse";
import TopArtistCard from "../../components/TopArtistCard";
import banner from "../../assets/images/Top-Artists.jpg";
import HeaderImage from "../../components/HeaderImage";

import TimelineButtons from "../../components/TimelineButtons";
export default function TopArtists() {
  useEffect(() => {
    setUser({ ...user, isloading: true });
    getData();
    setUser({ ...user, isloading: false });
  }, []);
  const [user, setUser] = useContext(UserContext);
  const getData = async (range) => {
    const TopArtists = await getTopArtists(range);
    const newartists = { ...user, topartists: TopArtists };
    setUser(newartists);
  };
  const artists = user.topartists;
  const artistsList = artists.map((artist, index) => (
    <TopArtistCard
      name={artist.artistName}
      genres={artist.genres[0]}
      rank={index + 1}
      art={artist.art}
      popularity={artist.popularity}
      key={artist.id}
    />
  ));

  return (
    <div className="container mx-auto">
      <HeaderImage image={banner} />
      <div className="flex">
        <h1 className="font-bold mt-6 ml-4 text-gray-600 hover:text-black">
          <Link to="/">Top Tracks</Link>
        </h1>
        <h1 className="font-bold mt-6 ml-4">Top Artists</h1>
      </div>
      <TimelineButtons type="artists" />

      {user.isloading && (
        <div>
          <h1>loading</h1>
        </div>
      )}
      {!user.isloading && <div>{artistsList}</div>}
    </div>
  );
}
