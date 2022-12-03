import * as React from "react";
import { Box, Drawer, Toolbar, List, Divider, Typography } from "@mui/material";
import { Home, ShowChart, Terminal, Devices } from "@mui/icons-material";
import { SideBarItem } from "./SideBarItem";

const drawerWidth = 300;

export const LeftSideBar = () => {
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <SideBarItem text="HOME" Icon={<Home />} path="/home" />
          <SideBarItem text="DEVICES" Icon={<Devices />} path="/devices" />
          <SideBarItem text="STATUS" Icon={<ShowChart />} path="/status" />
          <SideBarItem text="PROCESSES" Icon={<Terminal />} path="/processes" />
        </List>
        <List></List>
      </Drawer>
    </Box>
  );
};
