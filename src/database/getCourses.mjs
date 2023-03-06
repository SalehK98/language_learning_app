async function getCourser(setError, error2) {
  const data = await fetch(
    "https://6405b55440597b65de3e8d49.mockapi.io/language/courses"
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("response not ok");
      }
      setError(false);
      return res.json();
    })
    .then((data) => {
      console.log("data from fetch", data);
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

export { getCourser };
