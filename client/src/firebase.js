// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPW5sK9bHCQ_QeDVkRel_cBYwQH0NzaF0",
  authDomain: "starfood-8d03a.firebaseapp.com",
  databaseURL: "https://starfood-8d03a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "starfood-8d03a",
  storageBucket: "starfood-8d03a.appspot.com",
  messagingSenderId: "861455697945",
  appId: "1:861455697945:web:be6e195fc1df824832c288",
  measurementId: "G-ZP4ESMFLLJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// auth take ekhan thake export kore dicci jate anywhere use korte pari karon ekhane Initialize Firebase korachi tai ekhan thake use korte hobe
export const auth = getAuth();

export const provierGoogle = new GoogleAuthProvider();
