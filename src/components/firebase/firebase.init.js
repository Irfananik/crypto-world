// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIgSJB4QVhyhg0DUCRb0FIkwgiQWc9bIY",
  authDomain: "crypto-world-8c1a8.firebaseapp.com",
  projectId: "crypto-world-8c1a8",
  storageBucket: "crypto-world-8c1a8.appspot.com",
  messagingSenderId: "356164093496",
  appId: "1:356164093496:web:dcf1826ddbff2f6afec8cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app