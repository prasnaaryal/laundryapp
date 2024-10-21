import { Box } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@mui/icons-material/Search";
import { IoSearchCircleOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <Box>
      <Box>
        <SearchIcon sx={{color:black}} />
      </Box>
    </Box>
  );
};

export default NavBar;
