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
  setLogged
) {
  const { email, password } = myUser;
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
    }
  });
}

export { inputHandler };
