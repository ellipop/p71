import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAzJh9N-2OZpibRfm0hTTVU4TzRKAj_iA4",
    authDomain: "project71-a8f0c.firebaseapp.com",
    projectId: "project71-a8f0c",
    storageBucket: "project71-a8f0c.appspot.com",
    messagingSenderId: "49685991717",
    appId: "1:49685991717:web:16407afb3dd7f1f28c4acc"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
