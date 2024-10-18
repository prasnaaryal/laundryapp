import { useRoutes } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes.js";


export default function ThemeRoutes() {
  return useRoutes([AuthenticationRoutes]);
}
