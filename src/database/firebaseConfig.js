import firebase from "firebase";

import getEnvVars from "../../environment";

const Config = getEnvVars();

require("firebase/auth");

// Optionally import the services that you want to use
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase

const firebaseConfig = {
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  projectId: Config.projectId,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId,
  appId: Config.appId,
  measurementId: Config.measurementId
};

const Firebase = firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp({});
} else {
  firebase.app(); // if already initialized, use that one
}
export default Firebase;
