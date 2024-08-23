import { auth } from "../../../../utils/config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setErrorMessage } from "../../../../store/global/globalSlice";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("SIGNED UP", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;

        console.log("errorCode", error.code);

        if (errorCode === "auth/email-already-in-use") {
          dispatch(setErrorMessage("The email address is already in use"));
          // Show appropriate message to the user
        } else if (errorCode === "auth/invalid-email") {
          dispatch(setErrorMessage("The email address is not valid"));
          // Show appropriate message to the user
        } else if (errorCode === "auth/weak-password") {
          dispatch(setErrorMessage("The password is too weak"));
          // Show appropriate message to the user
        } else {
          dispatch(setErrorMessage("Error creating user"));
          // Handle other errors (e.g., network issues)
        }
      });
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("SIGNED IN", user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log("error", errorCode);

        if (errorCode === "auth/user-not-found") {
          dispatch(setErrorMessage("No user found with this email"));
          // Show appropriate message to the user
        } else if (errorCode === "auth/invalid-credential") {
          dispatch(setErrorMessage("Incorrect password"));
          // Show appropriate message to the user
        } else if (errorCode === "auth/invalid-email") {
          dispatch(setErrorMessage("Invalid email format"));
          // Show appropriate message to the user
        } else {
          dispatch(setErrorMessage("Error signing in"));
          // Handle other errors (e.g., network issues)
        }
      });
  };

  return {
    handleUserRegistration,
    handleUserLogin,
  };
};

export default useAuth;
