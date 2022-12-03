import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Device, getDevices } from "../api/api";
import { Frame } from "../components/Frame";

export const Devices = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    getDevices().then((data) => {
      console.log(data);
      setDevices(() => data);
    });
  }, []);

  return (
    <Frame>
      <Box>
        <Typography variant="h2" noWrap component="div">
          Devices
        </Typography>
      </Box>
    </Frame>
  );
};
