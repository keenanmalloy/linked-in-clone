import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrzqfj8sCfZRQfPMN7hezQNvO2HZWDVmU",
  authDomain: "linkedin-clone-ed38b.firebaseapp.com",
  projectId: "linkedin-clone-ed38b",
  storageBucket: "linkedin-clone-ed38b.appspot.com",
  messagingSenderId: "688319448515",
  appId: "1:688319448515:web:81f2dd33d21e61fd33e976",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
