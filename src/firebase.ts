// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCraFLl90iRg1LCj1gc_glSDFqRDt5MqI8",
  authDomain: "twitter-clone-app-2a6c2.firebaseapp.com",
  projectId: "twitter-clone-app-2a6c2",
  storageBucket: "twitter-clone-app-2a6c2.appspot.com",
  messagingSenderId: "572277165609",
  appId: "1:572277165609:web:8b039845825843654b1638",
  measurementId: "G-2RFTF89QDN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db=firebase.firestore();
export default db;