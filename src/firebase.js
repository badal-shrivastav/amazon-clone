import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAR0VgRGaf130uTL48D3IeE0u7KXn0bMc4",
        authDomain: "clone-e7bdb.firebaseapp.com",
        projectId: "clone-e7bdb",
        storageBucket: "clone-e7bdb.appspot.com",
        messagingSenderId: "360633272608",
        appId: "1:360633272608:web:bbe8f23c33a1554f612f45"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};