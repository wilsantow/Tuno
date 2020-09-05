import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import TopTracks from "./containers/TopTracks/TopTracks";

import Login from "./containers/Login/Login";
import { UserProvider } from "./context/UserContext";
import history from "./lib/history";

import Callback from "./containers/Callback/Callback";

import TopArtists from "./containers/TopArtists/TopArtists";

function App() {
  return (
    <UserProvider>
      <Router history={history}>
        <div className="md:text-xl ">
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/callback">
              <Callback />
            </Route>
            <Route exact path="/">
              <TopTracks />
            </Route>
            <Route path="/top-artists">
              <TopArtists />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
