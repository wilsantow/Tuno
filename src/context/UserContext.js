import React, { useState, createContext } from "react";

const initialState = {
  isloggedin: false,
  person: {},
  toptracks: [],
  topartists: [],
  range: "short_term",
  isloading:false
};

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
