import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAL1H8NsfOztBP8TnJwRuF7NfjJtou_KYg",
  authDomain: "discord-clone-b2e45.firebaseapp.com",
  databaseURL: "https://discord-clone-b2e45.firebaseio.com",
  projectId: "discord-clone-b2e45",
  storageBucket: "discord-clone-b2e45.appspot.com",
  messagingSenderId: "384033755701",
  appId: "1:384033755701:web:1dbe71d2c6cb0168d7d77c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
