import React, { useEffect, useState } from "react";
import Progress from "../Progress/Progress";
import { getData } from "../../database/getData.mjs";

export default function ProgressPAge() {
  const [newUser, setNewUser] = useState(false);
  const [isData, setIsData] = useState(false);
  const [error1, setError1] = useState(false);

  useEffect(() => {
    const data = getData(
      setError1,
      error1,
      "https://6405b55440597b65de3e8d49.mockapi.io/language/users"
    );
    data.then((result) => {
      console.log("xoxoxxoxoxxo", result);
      if (!error1) {
        setNewUser(result);
        console.log("xoxo", newUser);
        setIsData(true);
      }
    });
  }, []);

  return (
    <>
      {console.log(isData)}
      {isData ? (
        error1 ? (
          <div style={{ padding: "100px" }}>Error</div>
        ) : (
          <div style={{ padding: "100px" }}>
            <Progress users={newUser} />
          </div>
        )
      ) : (
        <div style={{ padding: "100px" }}>Loading</div>
      )}
    </>
  );
}
