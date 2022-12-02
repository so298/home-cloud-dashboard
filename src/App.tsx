import { CssBaseline, Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { LeftSideBar } from "./components/LeftSideBar";

const drawerWidth = 300;

export const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Box display="flex">
        <CssBaseline />
        <LeftSideBar />
        <Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
          </Box>
        </Box>
      </Box>
    </div>
  );
};
