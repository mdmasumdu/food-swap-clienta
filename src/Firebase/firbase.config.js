import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6tumaIhwhH38CKFffaosP2Hgn5rOxLUs",
  authDomain: "food-swap-69128.firebaseapp.com",
  projectId: "food-swap-69128",
  storageBucket: "food-swap-69128.appspot.com",
  messagingSenderId: "41396324113",
  appId: "1:41396324113:web:a617419a01d1ce7bc36eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;