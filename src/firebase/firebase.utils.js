import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC3Cf78K9f64Aq9mYJAr4yMPaP1D7vyhvY",
  authDomain: "ecommerce-db-a6b6a.firebaseapp.com",
  databaseURL: "https://ecommerce-db-a6b6a.firebaseio.com",
  projectId: "ecommerce-db-a6b6a",
  storageBucket: "ecommerce-db-a6b6a.appspot.com",
  messagingSenderId: "154093861336",
  appId: "1:154093861336:web:7f77ad67a540a6e729daad",
  measurementId: "G-BQV4YQWLNP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// https://firebase.google.com/docs/auth/web/google-signin
const provider = new firebase.auth.GoogleAuthProvider();

// https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider
// developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters
provider.setCustomParameters({ prompt: "select_account" });

// https://firebase.google.com/docs/auth/web/google-signin
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
