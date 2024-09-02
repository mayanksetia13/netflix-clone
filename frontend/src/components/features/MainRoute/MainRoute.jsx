import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "../Browse/Browse";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../utils/config/firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/global/globalSlice";
import Account from "../Account/Account";

function MainRoute() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginSignUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/account",
      element: <Account />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, metadata } = user;
        dispatch(setUser({ uid, email, displayName, metadata }));
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default MainRoute;
