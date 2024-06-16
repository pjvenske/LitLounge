import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZO1sOcMXCvqEdFywuh_JwvK7WjplU-kk",
    authDomain: "todo-app-e225b.firebaseapp.com",
    projectId: "todo-app-e225b",
    storageBucket: "todo-app-e225b.appspot.com",
    messagingSenderId: "669332897163",
    appId: "1:669332897163:web:95df74c395c11190ed438e",
    measurementId: "G-S6D30CG05R"
  };

// init firebase

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }