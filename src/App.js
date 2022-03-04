import React, { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import HomeComponent from "./Components/HomeComponent";
import AlertComponent from "./Components/AlertComponent";
import AddAdvisoryComponent from "./Components/AddAdvisoryComponent";

import {
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            INFO3139 - Case Study
          </Typography>
          <IconButton
            onClick={handleClick}
            color="inherit"
            style={{ marginLeft: "auto", paddingRight: "1vh" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/home">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/alertSetup">
              Alert Setup
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/addAdvisory">
              Add Advisory
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/alertSetup" element={<AlertComponent />} />
          <Route path="/addAdvisory" element={<AddAdvisoryComponent />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
};
export default App;
