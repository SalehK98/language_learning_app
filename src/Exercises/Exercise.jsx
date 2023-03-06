import React, { useEffect, useState } from "react";
import getExercises from "../database/getExercise.mjs";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBbJsUi5ASfZF3Qxdd2R6v859c7SagH3Us",
  authDomain: "language-learning-app-ed162.firebaseapp.com",
  projectId: "language-learning-app-ed162",
  storageBucket: "language-learning-app-ed162.appspot.com",
  messagingSenderId: "457208596894",
  appId: "1:457208596894:web:2bd7eeb9028802311aee8f",
  measurementId: "G-1XZ0FXKSGV",
});

const db = getFirestore(firebaseConfig);

export default function Exercise() {
  const [isData, setIsData] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = getExercises(db);
    data.then((res) => {
      setData(res);
      setIsData(true);
    });
  }, []);

  return (
    <div style={{ padding: "60px" }}>
      {isData ? console.log(data) : <></>}
      {isData ? (
        data.map((el) => {
          return (
            <>
              <h1>my type is: {el.type}</h1>
              <p>my question is {el.question}</p>
              <p>my answer is {el.answer}</p>
              {/* <p>is completed {el.isCompleted.toString()}</p> */}
            </>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
