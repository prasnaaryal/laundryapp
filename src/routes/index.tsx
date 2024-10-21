import { useRoutes } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes.js";
import PrivateRoutes from "./PrivateRoutes.js";


export default function ThemeRoutes() {
  return useRoutes([AuthenticationRoutes,PrivateRoutes]);
}
