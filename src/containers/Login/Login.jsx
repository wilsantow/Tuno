import React from "react";

import { loginSpotify } from "../../lib/authorization";

import background from "../../assets/images/background.jpg";
export default function login() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen w-screen  text-white "
    >
      <div className="  ml-4 container mx-auto">
        <h1 className=" pt-2 mr-2 text-4xl sm:text-5xl font-extrabold font-mono text-blue-700">
          Tuno
        </h1>
        <div className="p-2    ">
          <h2 className="  text-2xl sm:text-5xl leading-tight   ">
            Know your top Tracks and Artists.
          </h2>
          <h2 className=" mt-1 sm:text-3xl text-xl  ">
            Powered by Spotify API.
          </h2>

          <button
            className=" md:mt-8 rounded-md shadow-md bg-blue-700 "
            onClick={loginSpotify}
          >
            <h1 className="px-2 py-2 text-lg md:text-xl">Connect to spotify</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
