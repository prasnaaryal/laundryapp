import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.js";
import SideBar from "../components/SideBar.js";

function App() {
  return (
    <>
      <NavBar />
      <SideBar /> {/* Only rendered once in the layout */}
      <Outlet /> {/* This renders the child routes */}
    </>
  );
}

export default App;
