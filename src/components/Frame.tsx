import React from "react";
import { Box } from "@mui/material";
import { LeftSideBar } from "./LeftSideBar";

type Props = {
  children: React.ReactNode
}

export const Frame = ({children}: Props) => {
  return (
    <Box display="flex">
      <LeftSideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
};
