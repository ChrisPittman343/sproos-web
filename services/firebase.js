import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

// const firebaseConfig = {
//   apiKey: process.env.FB_API_KEY,
//   authDomain: process.env.FB_AUTH_DOMAIN,
//   projectId: process.env.FB_PROJECT_ID,
//   storageBucket: process.env.FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
//   appId: process.env.FB_APP_ID,
//   measurementId: process.env.FB_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDhIT3vvoYJyFPIksdGraJT0J-umQYY8xo",
  authDomain: "sproos-a1282.firebaseapp.com",
  projectId: "sproos-a1282",
  storageBucket: "sproos-a1282.appspot.com",
  messagingSenderId: "754047213842",
  appId: "1:754047213842:web:cf00ce690267c6984553cb",
  measurementId: "G-7JGD8EDG9X",
};

firebase.apps.length === 0
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export var auth = firebase.auth();
export var db = firebase.firestore();
export var functions = firebase.functions();
