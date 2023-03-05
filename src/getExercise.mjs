import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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
const db = getFirestore(firebaseConfig);

async function getExercises(db) {
  const citiesCol = collection(db, "exercises");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  //   console.log(cityList);
  return cityList;
}

export default getExercises;
