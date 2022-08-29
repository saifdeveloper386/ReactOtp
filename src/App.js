import React from "react";
import { auth } from "./components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import Main from "./components/Main";
import Routing from "./components/Routing";

function App() {
  const [user] = useAuthState(auth);
  // return user ? <Main /> : <Login />;
return(
  <>
    <Routing/>
  </>
)
}

export default App;
