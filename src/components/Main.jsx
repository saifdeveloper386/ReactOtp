import React from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
const Main = () => {
    let navigate = useNavigate();
  const logout = () => {
    auth.signOut();
    navigate("/")
  };

  return (
    <div style={{ marginTop: 250 }}>
      <center>
        <h3>Welcome{auth.currentUser.phoneNumber}</h3>
        <button style={{ marginLeft: "20px" }} onClick={logout}>
          Logout
        </button>
      </center>
    </div>
  );
};

export default Main;
