import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { Frame } from "./components/Frame";

export const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header"></header>
      <Frame>
        <Box>hello</Box>
      </Frame>
    </div>
  );
};
