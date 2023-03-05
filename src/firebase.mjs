import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebase = (email, password, setIsUser) => {
  const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBbJsUi5ASfZF3Qxdd2R6v859c7SagH3Us",
    authDomain: "language-learning-app-ed162.firebaseapp.com",
    projectId: "language-learning-app-ed162",
    storageBucket: "language-learning-app-ed162.appspot.com",
    messagingSenderId: "457208596894",
    appId: "1:457208596894:web:2bd7eeb9028802311aee8f",
    measurementId: "G-1XZ0FXKSGV",
  });

  // const email = "salehkalouti@gmail.com";
  // const password = "123456";

  // const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user", user);
      setIsUser(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      console.log("logged in");
    } else {
      console.log("no user");
    }
  });
};

export default firebase;
