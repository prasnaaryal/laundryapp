import BlankLayout from "../layout/BlankLayout/BlankLayout.js";
import Login from "../pages/Login.js";


const AuthenticationRoutes = {
  path: "/",
  element: <BlankLayout />,
  children: [
    {
      path: "/login",
      element: <Login  />,
    },
  ],
};

export default AuthenticationRoutes;
