import { Box, Typography, Divider, Fab } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Sync } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { callWol, Device, getDevices } from "../api/api";
import { Frame } from "../components/Frame";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Device name", width: 200 },
  { field: "localip", headerName: "Local IP", width: 160 },
  { field: "mac", headerName: "MAC address", width: 160 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
  },
];

export const Devices = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  const updateDevice = () => {
    getDevices().then((data) => {
      setDevices(() => data);
    });
  };

  useEffect(() => {
    updateDevice();
  }, []);

  return (
    <Frame>
      <Typography variant="h2" noWrap component="div">
        Devices
      </Typography>
      <Box>
        <Box
          position="relative"
          margin={{ left: "10px", top: "20px" }}
          sx={{ height: 80 }}
        >
          <Fab
            color="primary"
            aria-label="update"
            variant="extended"
            onClick={updateDevice}
            sx={{fontSize: "18px"}}
          >
            <Sync sx={{ mr: 1 }} />
            sync
          </Fab>
        </Box>
        <Box sx={{ height: 400, width: 800 }}>
          <DataGrid
            rows={devices}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onRowClick={(data) => {
              const callDevice = data.row as Device;
              if (
                window.confirm(`Do you wake up device "${callDevice.name}"?`)
              ) {
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
      </Box>
    </Frame>
  );
};
