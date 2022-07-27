// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzqYEW_JiUF5lCaGAnTEhx4jx-MWfn10",
  authDomain: "autoevoluton.firebaseapp.com",
  projectId: "autoevoluton",
  storageBucket: "autoevoluton.appspot.com",
  messagingSenderId: "441861456558",
  appId: "1:441861456558:web:2aa616eed2d7c67f89633f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
