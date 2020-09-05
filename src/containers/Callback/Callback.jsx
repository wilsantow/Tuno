import React, { useContext, useEffect } from "react";

import { UserContext } from "../../context/UserContext";
import { loginCallback } from "../../lib/authorization";
export default function Callback() {
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    async function check() {
      const isloggedin = await loginCallback();
      setUser({ ...user }, (user.isloggedin = isloggedin));
    }
    check();
  }, []);

  return (
    <div>
      <h1>callback</h1>
    </div>
  );
}
