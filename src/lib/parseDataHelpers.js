import queryString from "query-string";

export async function createURl(url, query_range) {
  const endPoint = queryString.stringifyUrl({
    url: url,
    query: {
      time_range: query_range,
    },
  });
  return endPoint;
}
export async function fetchData(endpoint, access_token) {
  const data = await fetch(endpoint, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
}

export async function parseData(data) {
  const parsedData = await data.json();
  const reqData = parsedData.items;
  return reqData;
}

export async function filterData(data, category) {
  const filteredData = [];
  if (category === "artists") {
    data.forEach((item) => {
      const artist = {
        artistName: item.name,
        popularity: item.popularity,
        genres: item.genres,
        art: item.images[2].url,
        id: item.uri,
      };
      filteredData.push(artist);
    });

    return filteredData;
  }

  data.forEach((item) => {
    const track = {
      name: item.name,
      popularity: item.popularity,
      artist: item.artists[0].name,
      art: item.album.images[2].url,
      id: item.id,
    };
    filteredData.push(track);
  });
  return filteredData;
}
