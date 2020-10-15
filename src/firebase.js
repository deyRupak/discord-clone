// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBMCT7ldpD3qNV94rwXo4FzStyOGoI4jsA",
  authDomain: "discord-clone-rdx.firebaseapp.com",
  databaseURL: "https://discord-clone-rdx.firebaseio.com",
  projectId: "discord-clone-rdx",
  storageBucket: "discord-clone-rdx.appspot.com",
  messagingSenderId: "909253752282",
  appId: "1:909253752282:web:239e87468ed0dfe5c73ce3",
  measurementId: "G-M4MSS1CPVP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

