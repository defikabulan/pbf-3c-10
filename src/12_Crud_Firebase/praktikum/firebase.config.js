import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfOiNuvs5hsW-QH7A070qz1Y5nwu2Bn6Q",
  authDomain: "belajar-react-f29bf.firebaseapp.com",
  databaseURL:
    "https://belajar-react-f29bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-react-f29bf",
  storageBucket: "belajar-react-f29bf.appspot.com",
  messagingSenderId: "380791913625",
  appId: "1:380791913625:web:60448e04cdc58e7e814c08",
  measurementId: "G-7PC41HG1T7",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();
