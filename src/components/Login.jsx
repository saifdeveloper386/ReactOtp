import React, { useState } from "react";
import { auth } from "./firebase";
import { getAuth, signInWithPhoneNumber ,RecaptchaVerifier} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
  // Inputs
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  const appVerifier = window.recaptchaVerifier;
 const getOtp=()=>{
    if ("OTPCredential" in window) {
        window.addEventListener("DOMContentLoaded", (e) => {
          const input = document.querySelector(
            'input[autocomplete="one-time-code"]'
          );
          if (!input) return;
          const ac = new AbortController();
          const form = input.closest("form");
          if (form) {
            form.addEventListener("submit", (e) => {
              ac.abort();
            });
          }
          navigator.credentials
            .get({
              otp: { transport: ["sms"] },
              signal: ac.signal,
            })
            .then((otp) => {
              input.value = otp.code;
              setotp(otp)
              if (form) form.submit();
            })
            .catch((err) => {
              console.error(err);
            });
        });
      }
 }

//   Generate Recaptcha
const generateRecaptcha=()=>{
    window.recaptchaVerifier=new RecaptchaVerifier("recaptcha-container",{
        "size":"invisible",
        "callback":(response)=>{
    
        }
    },auth)
}
  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;
    const pNumber=`+91${mynumber}`
    generateRecaptcha();
    let appVerifier=window.recaptchaVerifier
    signInWithPhoneNumber(auth,pNumber,appVerifier)
    .then(confirmationResult=>{
        window.confirmationResult=confirmationResult;
        setfinal(confirmationResult);
console.log(confirmationResult)
setshow(true)
    }).catch((err)=>{
console.log(err)
    })
   
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        alert("right code");
       navigate("/main")
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <input
            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="phone number"
            inputMode="numeric"
          />
          <br />
          <br />
          <div id="recaptcha-container"></div>
          <button onClick={signin}>Send OTP</button>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <input
            type="text"
            placeholder={"Enter your0 OTP"}
            autoComplete="one-time-code" inputMode="numeric"
            value={otp}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <button onClick={ValidateOtp}>Verify</button>
        </div>
      </center>
    </div>
  );
};

export default Login;
