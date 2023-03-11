import { signUp } from "../../database/firebase.mjs";

function inputHandler(
  myUser,
  setIsData,
  setPasswordTextFieldTypeRequired,
  setEmailTextFieldTypeRequired,
  setEmailHelperText,
  setPasswordHelperText,
  setVariant,
  setLoading,
  setLogged,
  setNameRequired,
  setNameHelperText
) {
  const { email, password, name } = myUser;
  if (!name) {
    setNameRequired(false);
    setNameHelperText("please enter a name");
    return;
  }
  const signUP = signUp(email, password, setIsData);
  setVariant("outlined");
  setLoading(true);
  signUP.then((res) => {
    switch (res) {
      case "auth/missing-email":
        setEmailTextFieldTypeRequired(false);
        setPasswordTextFieldTypeRequired(false);
        setEmailHelperText("InValid Email or Password");
        setPasswordHelperText("InValid Email or Password");
        setLoading(false);
        setVariant("contained");
        break;
      case "auth/internal-error":
        setEmailTextFieldTypeRequired(false);
        setPasswordTextFieldTypeRequired(false);
        setEmailHelperText("Missing Password");
        setPasswordHelperText("Missing Password");
        setLoading(false);
        setVariant("contained");
        break;
      case "auth/invalid-email":
        setEmailTextFieldTypeRequired(false);
        setPasswordTextFieldTypeRequired(false);
        setEmailHelperText("InValid Email or Password");
        setPasswordHelperText("InValid Email or Password");
        setLoading(false);
        setVariant("contained");
        break;
      case "auth/weak-password":
        // setEmailTextFieldTypeRequired(false)
        setPasswordTextFieldTypeRequired(false);
        // setEmailHelperText("Password must be 6 or more characters");
        setPasswordHelperText("Password must be 6 or more characters");
        setLoading(false);
        setVariant("contained");
        break;
      case "auth/admin-restricted-operation":
        setEmailTextFieldTypeRequired(false);
        setPasswordTextFieldTypeRequired(false);
        setEmailHelperText("Please Enter Email and Password");
        setPasswordHelperText("Please Enter Email and Password");
        setLoading(false);
        setVariant("contained");
        break;
      default:
        console.log(res);
        if (Array.isArray(res)) {
          const [email1, id] = res;
          localStorage.setItem(
            "loginInfo",
            JSON.stringify({ isLogged: true, user: email1, userId: id })
          );
          addToMockUsers(id, name, email1);
          setLogged(true);
        } else {
          alert("something went wrong");
          setLoading(false);
          setVariant("contained");
        }
    }
  });
}

function addToMockUsers(id, name, email) {
  const newUSER = {
    id: id,
    name: name,
    email: email,
    courses: [],
  };
  fetch("https://6405b55440597b65de3e8d49.mockapi.io/language/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUSER),
  });
}

export { inputHandler };
