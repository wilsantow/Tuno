import history from "./history";
import {
  getAccessToken,
  setAccessToken,
  checkTokenExpiration,
  isToken,
} from "./authorizationHelpers";

import {
  fetchData,
  parseData,
  filterData,
  createURl,
} from "./parseDataHelpers";

import { trackEndPoint, artistEndPoint } from "./endPoints";

export async function getTopTracks(range) {
  const topTracksEndPoint = await createURl(trackEndPoint, range);
  const access_token = await getAccessToken();
  if (await isToken(access_token)) {
    const topTracksData = await fetchData(topTracksEndPoint, access_token);
    if (await checkTokenExpiration(topTracksData)) {
      const requiredData = await parseData(topTracksData);
      const cleanData = await filterData(requiredData, "tracks");
      return cleanData;
    }
  }
  setAccessToken(null);
  history.replace("/login");
  return;
}

export async function getTopArtists(range) {
  const topArtistsEndPoint = await createURl(artistEndPoint, range);
  const access_token = await getAccessToken();
  if (await isToken(access_token)) {
    const topArtistsData = await fetchData(topArtistsEndPoint, access_token);
    if (checkTokenExpiration(topArtistsData)) {
      const parsedTopArtistsData = await parseData(topArtistsData);
      const cleanData = await filterData(parsedTopArtistsData, "artists");
      return cleanData;
    }
  }
  setAccessToken(null);
  history.replace("/login");
  return;
}
