import MainLayout from "../layout/MainLayout/MainLayout.js";
 import Home from "../pages/Home.js";


const PrivateRoutes = {
  path: "/manage",
  element: <MainLayout />,
  children: [
    {
      path: "home",
      element: <Home  />,
    },
  ],
};

export default PrivateRoutes;
