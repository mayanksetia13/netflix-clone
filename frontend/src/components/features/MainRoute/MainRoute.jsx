import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "../Browse/Browse";
import Login from "../Login/Login";

function MainRoute() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default MainRoute;
