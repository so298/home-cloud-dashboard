import { Box, Typography, Divider } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { callWol, Device, getDevices } from "../api/api";
import { Frame } from "../components/Frame";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Device name", width: 200 },
  { field: "mac", headerName: "MAC address", width: 160 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
  },
];

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
      <Box sx={{ height: 400, width: 700 }}>
        <Typography variant="h2" noWrap component="div">
          Devices
        </Typography>
        <DataGrid
          rows={devices}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(data) => {
            const callDevice = data.row as Device;
            if (window.confirm(`Do you wake up device "${callDevice.name}"?`)) {
              callWol(callDevice)
                .then((res) => {
                  console.info("[wol success]");
                  console.info(res);
                })
                .catch((error) => console.error(error));
            }
          }}
        />
      </Box>
    </Frame>
  );
};
