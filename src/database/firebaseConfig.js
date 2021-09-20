import firebase from 'firebase';
require('firebase/auth');

// Optionally import the services that you want to use
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDt1d-4O_aj0pAcoaayQOmbkdLK-9Tww3s",
    authDomain: "feiraonline2021.firebaseapp.com",
    projectId: "feiraonline2021",
    storageBucket: "feiraonline2021.appspot.com",
    messagingSenderId: "534824685885",
    appId: "1:534824685885:web:5b0535292c23d43cc2f554",
    measurementId: "G-CF2E30LPVZ"
};

const Firebase = firebase.initializeApp(firebaseConfig);
/*if (!firebase.apps.length) {
    try {
       
    } catch (err) {
        console.error("Firebase initialization error raised", err.stack)
    }
}*/

export default Firebase;