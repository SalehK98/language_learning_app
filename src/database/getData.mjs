// import {
//   collection,
//   getDocs,
// } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// async function getExercises(db) {
//   const citiesCol = collection(db, "exercises");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

// export default getExercises;

async function getData(setError, error2, url) {
  const data = await fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("response not ok", url);
      }
      setError(false);
      return res.json();
    })
    .then((data) => {
      console.log("data from third fetch", data, url);
      return data;
    })
    .catch((err) => {
      setError(true);
      console.error(err);
      console.log(error2);
      return err;
    });
  return data;
}

export { getData };
