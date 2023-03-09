import { initializeApp } from "firebase/app";
// from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//  from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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

const login = (
  email,
  password,
  setIsLogged,
  setUser,
  isLogged,
  user2,
  setIsData
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user", user);
      // setIsLogged(true);
      setIsData(true);
      localStorage.setItem(
        "loginInfo",
        JSON.stringify({ isLogged: true, user: user.email, userId: user.uid })
      );
      // setUser(user);
      // ...
      // return user ? true : false;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });
};

const signUp = (
  email,
  password,
  setIsLogged,
  setUser,
  isLogged,
  newUser,
  setIsData
) => {
  console.log("newuser from signup", newUser);
  // const { email, password, name, phoneNumber } = newUser;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      login(email, password, setIsLogged, setUser, isLogged, user, setIsData);
      // ...
      // console.log("cb2", cb);
      // return cb;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
      // ..
    });
};

const logOut = (setIsData, setIsLogged, setUser) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      // setIsLogged(false);
      // setUser(null);
      setIsData(true);
      localStorage.setItem(
        "loginInfo",
        JSON.stringify({ isLogged: false, user: "", userId: "" })
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
    const uid = user.uid;
    console.log("uid", uid);
  } else {
    console.log("no user", user);
  }
});

export { login, signUp, logOut };
