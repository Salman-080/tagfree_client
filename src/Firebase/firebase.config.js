// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUdDg0HtvyxqsoM7yjwUECmmOq93DFTfQ",
  authDomain: "tagfree-client.firebaseapp.com",
  projectId: "tagfree-client",
  storageBucket: "tagfree-client.appspot.com",
  messagingSenderId: "486852009523",
  appId: "1:486852009523:web:bb5614f60efd9ca179cd46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;