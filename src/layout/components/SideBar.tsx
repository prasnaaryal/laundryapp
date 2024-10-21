import { Box } from "@mui/material";
import React from "react";
import Logo from "/image/logo.png";

const SideBar = () => {
  return (
    <Box>
      <Box>
        <img src={Logo} alt="logo" style={{ width: 76, height: 27 }} />
      </Box>

      <Box>Omar Vetrovs</Box>

      <Box></Box>
    </Box>
  );
};

export default SideBar;
