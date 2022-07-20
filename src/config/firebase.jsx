// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_zj8i7Ra4ICj2XkqT96zyTna5-UWqG5A",
  authDomain: "mini-movie---dts-project-1.firebaseapp.com",
  projectId: "mini-movie---dts-project-1",
  storageBucket: "mini-movie---dts-project-1.appspot.com",
  messagingSenderId: "1033974489438",
  appId: "1:1033974489438:web:cfb70bad365287169aafcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };