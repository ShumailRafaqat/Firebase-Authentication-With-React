import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3AJPEGQHEZYfdQqsguJ2YT0h6A7xYyS0",
  authDomain: "login-auth-9d964.firebaseapp.com",
  projectId: "login-auth-9d964",
  storageBucket: "login-auth-9d964.firebasestorage.app",
  messagingSenderId: "105198837495",
  appId: "1:105198837495:web:ac08fdb13842f62e03fdf2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
