import queryString from "query-string";
import { authorizeEndPoint } from "./endPoints";
import history from "./history";

import {
  getAccessToken,
  setAccessToken,
  isToken,
} from "./authorizationHelpers";

const authorizeUserEndPoint = queryString.stringifyUrl({
  url: authorizeEndPoint,
  query: {
    client_id: process.env.REACT_APP_CLIENT_ID,
    response_type: "token",
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    scope: process.env.REACT_APP_SCOPE,
  },
});

//redirect from login to spotify page
export async function loginSpotify() {
  window.location.href = authorizeUserEndPoint;
}

//callback function after accepting or rejecting in spotify login page
export async function loginCallback() {
  console.log(window.location.hash);
  const parsedHash = queryString.parse(window.location.hash);
  const access_token = parsedHash["access_token"];
  if (isToken(access_token)) {
    setAccessToken(access_token);
    history.push("/");
    return true;
  }
  history.replace("/login");
  return false;
}

export async function checkLogin() {
  const access_token = getAccessToken();
  if (!isToken(access_token)) {
    history.replace("/login");
    return;
  }
  return;
}
