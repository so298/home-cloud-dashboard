import * as React from "react";
import { Box, Drawer, Toolbar, List, Divider } from "@mui/material";
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
        <Toolbar />
        <Divider />
        <List>
          <SideBarItem text="HOME" Icon={Home} />
          <SideBarItem text="DEVICES" Icon={Devices} />
          <SideBarItem text="STATUS" Icon={ShowChart} />
          <SideBarItem text="PROCESSES" Icon={Terminal} />
        </List>
        <List></List>
      </Drawer>
    </Box>
  );
};
