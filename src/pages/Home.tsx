import { Box, Typography } from "@mui/material";
import React from "react";
import { Frame } from "../components/Frame";

export const Home = () => {
  return (
    <Frame>
      <Box>
        <Typography variant="h2" noWrap component="div">Home</Typography>
      </Box>
    </Frame>
  );
};
