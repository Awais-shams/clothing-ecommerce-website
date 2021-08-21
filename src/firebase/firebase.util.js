import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config={
    apiKey: "AIzaSyAF9KQ7pqTA8TNXFm39-bOL7Kn9KmhtPx8",
    authDomain: "clothing-ecommerce-database.firebaseapp.com",
    projectId: "clothing-ecommerce-database",
    storageBucket: "clothing-ecommerce-database.appspot.com",
    messagingSenderId: "59125762963",
    appId: "1:59125762963:web:5ad303550a7cbb3f1bf666",
    measurementId: "G-PBZ0MSJXXB"
};

firebase.initializeApp(Config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;

