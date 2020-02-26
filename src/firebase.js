import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBgWBZeCD54QIHUScRILrA7XbLqCfUHfRo",
    authDomain: "crucial-lyceum-241410.firebaseapp.com",
    databaseURL: "https://crucial-lyceum-241410.firebaseio.com",
    projectId: "crucial-lyceum-241410",
    storageBucket: "crucial-lyceum-241410.appspot.com",
    messagingSenderId: "498577895415",
    appId: "1:498577895415:web:31110eeaf97e138584c8f2",
    measurementId: "G-T4DYQ6EJKN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;