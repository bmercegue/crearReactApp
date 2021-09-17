import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBvoBeFGbn5s8nANEyR3ePGCkLDMjN1HnQ",
    authDomain: "bea-store-site.firebaseapp.com",
    projectId: "bea-store-site",
    storageBucket: "bea-store-site.appspot.com",
    messagingSenderId: "132715600993",
    appId: "1:132715600993:web:e8021c1495a62006595e20"

};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}