import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSZBe_1oZQJNA0Q8P6HgKmV7sLR9ti7-4",
  authDomain: "beetcode-bae03.firebaseapp.com",
  projectId: "beetcode-bae03",
  storageBucket: "beetcode-bae03.appspot.com",
  messagingSenderId: "640393627177",
  appId: "1:640393627177:web:f1f81ac3b5c39d47e07e38",
  measurementId: "G-J3ET9GQGPT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
