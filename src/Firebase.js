import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBgjZc-KsS3fZASPlHicM3i_bIoihTa9XU",
  authDomain: "clone-eea3c.firebaseapp.com",
  projectId: "clone-eea3c",
  storageBucket: "clone-eea3c.appspot.com",
  messagingSenderId: "700591079887",
  appId: "1:700591079887:web:4acce505b9347457bc12ba",
  measurementId: "G-GX7EEPKR3Y"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};