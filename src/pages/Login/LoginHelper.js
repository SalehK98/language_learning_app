import { login } from "../../database/firebase.mjs";

function inputHandler(
  myUser,
  setIsData,
  setPasswordTextFieldTypeRequired,
  setEmailTextFieldTypeRequired,
  setEmailHelperText,
  setPasswordHelperText,
  setVariant,
  setLoading,
  setLogged
) {
  console.log("from login helper", myUser);
  const { email, password } = myUser;
  const _login = login(email, password, setIsData);
  _login.then((res) => {
    switch (res) {
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
      case "auth/wrong-password":
        //   setEmailTextFieldTypeRequired(false)
        setPasswordTextFieldTypeRequired(false);
        // setEmailHelperText("Password must be 6 or more characters");
        setPasswordHelperText("Wrong Password");
        setLoading(false);
        setVariant("contained");
        break;
      case "auth/user-not-found":
        setEmailTextFieldTypeRequired(false);
        setPasswordTextFieldTypeRequired(false);
        setEmailHelperText("invalid Email or Password");
        setPasswordHelperText("invalid Email or Password");
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
        if (Array.isArray(res)) {
          const [email, id] = res;
          localStorage.setItem(
            "loginInfo",
            JSON.stringify({ isLogged: true, user: email, userId: id })
          );
          setLogged(true);
        } else {
          alert("something went wrong");
          setLoading(false);
          setVariant("contained");
        }
        console.log(res);
    }
  });
}

export { inputHandler };
