import { CssBaseline, Box } from "@mui/material";
import React from "react";
import { LeftSideBar } from "./components/LeftSideBar";

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
            hello world
          </Box>
        </Box>
      </Box>
    </div>
  );
};
