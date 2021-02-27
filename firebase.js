// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBE-M5HZCOrSby71sKRB6D--iQt7_oPm2w",
  authDomain: "challenge-39853.firebaseapp.com",
  projectId: "challenge-39853",
  storageBucket: "challenge-39853.appspot.com",
  messagingSenderId: "689132872895",
  appId: "1:689132872895:web:b78e0774b87c2a1acad20a",
  measurementId: "G-M0RETHGFDR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };