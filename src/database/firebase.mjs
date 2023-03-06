import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBbJsUi5ASfZF3Qxdd2R6v859c7SagH3Us",
  authDomain: "language-learning-app-ed162.firebaseapp.com",
  projectId: "language-learning-app-ed162",
  storageBucket: "language-learning-app-ed162.appspot.com",
  messagingSenderId: "457208596894",
  appId: "1:457208596894:web:2bd7eeb9028802311aee8f",
  measurementId: "G-1XZ0FXKSGV",
});

const auth = getAuth(firebaseConfig);

const login = (email, password, setIsLogged, setUser, isLogged, user2) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user", user);
      setIsLogged(true);
      localStorage.setItem(
        "loginInfo",
        JSON.stringify({ isLogged: isLogged, user: user.email })
      );
      setUser(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });
};

const signUp = (email, password, setIsLogged, setUser, isLogged, user3) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      login(email, password, setIsLogged, setUser, isLogged, user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
      // ..
    });
};

const logOut = (setIsLogged, setUser) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      setIsLogged(false);
      setUser(null);
      localStorage.setItem(
        "loginInfo",
        JSON.stringify({ isLogged: false, user: "" })
      );
      console.log("signedOut");
    })
    .catch((error) => {
      // An error happened.
      console.log("signOut error", error);
    });
};

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in", user);
  } else {
    console.log("no user", user);
  }
});

export { login, signUp, logOut };
