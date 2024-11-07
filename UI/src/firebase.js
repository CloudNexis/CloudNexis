// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHJ1PKodzESPXMIyW0wFC6ZGyrBrp20eA",
  authDomain: "cloud-nexis.firebaseapp.com",
  projectId: "cloud-nexis",
  storageBucket: "cloud-nexis.firebasestorage.app",
  messagingSenderId: "1053330370863",
  appId: "1:1053330370863:web:f2c57be32e741fc63171da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);