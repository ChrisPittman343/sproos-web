import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENT_ID,
};

firebase.apps.length === 0
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const fb = firebase;
export const auth = firebase.auth();
export const db = firebase.database();
export const functions = firebase.functions();

functions.useEmulator("localhost", 5001);
