// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFnJozSYqsOm0v1KrOOhBx5iBgdVIYy3s",
  authDomain: "blog-33384.firebaseapp.com",
  projectId: "blog-33384",
  storageBucket: "blog-33384.appspot.com",
  messagingSenderId: "486130749624",
  appId: "1:486130749624:web:fb3aa0170cb147e23ca44d"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;