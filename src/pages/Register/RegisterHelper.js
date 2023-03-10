import { signUp } from "../../database/firebase.mjs";

function inputHandler(
  myUser,
  setIsData,
  setPasswordTextFieldTypeRequired,
  setEmailTextFieldTypeRequired,
  setEmailHelperText,
  setPasswordHelperText,
  setVariant,
  setLoading
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
      default:
        alert("something went wrong");
        setLoading(false);
        setVariant("contained");
    }
  });
}

export { inputHandler };
