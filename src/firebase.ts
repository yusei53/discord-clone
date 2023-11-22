// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo6mOA25OLeRvStIslLMY14hy4SUT5ihs",
  authDomain: "discord-clone-1bdcb.firebaseapp.com",
  projectId: "discord-clone-1bdcb",
  storageBucket: "discord-clone-1bdcb.appspot.com",
  messagingSenderId: "413842119554",
  appId: "1:413842119554:web:bf52545e21f83707f08d9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
