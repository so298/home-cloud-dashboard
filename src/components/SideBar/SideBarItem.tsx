import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
  text: string;
  path: string;
  Icon: React.ReactNode;
};

export const SideBarItem = ({ text, Icon, path }: Props) => {
  return (
    <NavLink to={path} style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{Icon}</ListItemIcon>
          <Box sx={{ textDecoration: "none" }}>
            <ListItemText primary={text} />
          </Box>
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
};
