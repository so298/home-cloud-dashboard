import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";
import { Devices } from "./pages/Devices";
import { Status } from "./pages/Status";
import { Processes } from "./pages/Processes";

export const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/status" element={<Status />} />
        <Route path="/processes" element={<Processes />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};
