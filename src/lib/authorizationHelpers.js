export async function getAccessToken() {
  const access_token = localStorage.getItem("access_token");
  return access_token;
}

export async function setAccessToken(access_token) {
  localStorage.setItem("access_token", access_token);
  return;
}

export async function checkTokenExpiration(fetchedData) {
  if (fetchedData.status > 299 || fetchedData.status < 200) {
    return false;
  }
  return true;
}

export async function isToken(access_token) {
  if (access_token !== undefined && access_token !== null) {
    return true;
  }
  return false;
}
