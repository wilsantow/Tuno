# Tuno

Know your Top Tracks and Artists.


The Application runs using [**Spotify API**](https://developer.spotify.com/documentation/web-api/) . It allows users to view thier top artists and tracks.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0feecb18-901d-48ef-afb4-f15e10d64f1b/deploy-status)](https://app.netlify.com/sites/tuno/deploys)

Try the live version  [tuno.netlify.app](https://tuno.netlify.app/login)

## To run the project locally

1. Create an app in [Spotify](https://developer.spotify.com/dashboard/applications)

1. Set the callback url to http://localhost:3000/callback

    - Copy the client ID.
    
    - Create a new file  `.env.local` in the root directory.
    
    - Set REACT_APP_CLIENT_ID="Your Client ID"

    - Set REACT_APP_REDIRECT_URI="http://localhost:3000/callback"

    - Set REACT_APP_SCOPE = "user-read-email user-top-read"

1. Run

    - `npm install`

    - `npm start`



---

### CREDITS

Design Inspiration : [Replayify](https://replayify.com/login) by [Pasi Lampinen](https://github.com/palampinen)
