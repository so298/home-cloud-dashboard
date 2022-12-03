import axios from "axios";
import { apiUrl } from "./url";

export type Device = {
  name: string;
  mac: string;
};

export const getDevices = async () => {
  const devices = await axios.get(`${apiUrl}/devices`);
  return devices.data as Device[];
};
