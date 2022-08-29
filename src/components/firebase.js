
import { getApp, initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAllNKrfNOv0gUTmiAQk4wGZ3ewi9nvo7A",
    authDomain: "fir-demo-eff02.firebaseapp.com",
    databaseURL: "https://fir-demo-eff02-default-rtdb.firebaseio.com",
    projectId: "fir-demo-eff02",
    storageBucket: "fir-demo-eff02.appspot.com",
    messagingSenderId: "172634724343",
    appId: "1:172634724343:web:1b9b39eaa17767223c40f2"
  };
  
  const app = initializeApp({...firebaseConfig});
  export default app

  const auth = getAuth(app);
  console.log(getApp())
  auth.languageCode = 'it';
//   window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.

//     }
//   }, auth);

  export {auth};