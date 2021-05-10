import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCT1sl2rgybG4m4N-2_3N6XZA1vjdJhoOU",
    authDomain: "lecarte-80850.firebaseapp.com",
    projectId: "lecarte-80850",
    storageBucket: "lecarte-80850.appspot.com",
    messagingSenderId: "888408925027",
    appId: "1:888408925027:web:5e573f0f80f505d71b6956",
    measurementId: "G-TXRLJTE5N1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore

export default db;