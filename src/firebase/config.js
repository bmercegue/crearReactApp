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

// // Points to the root reference
// var storageRef = firebase.storage().ref();

// // Points to 'images'
// var imagesRef = storageRef.child('images');

// // Points to 'images/space.jpg'
// // Note that you can use variables to create child values
// var fileName = 'space.jpg';
// var spaceRef = imagesRef.child(fileName);

// // File path is 'images/space.jpg'
// var path = spaceRef.fullPath

// // File name is 'space.jpg'
// var name = spaceRef.name

// // Points to 'images'
// var imagesRef = spaceRef.parent;