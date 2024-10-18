import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const BlankLayout = () => {
  return (
    <Box className="h-screen">
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default BlankLayout;
