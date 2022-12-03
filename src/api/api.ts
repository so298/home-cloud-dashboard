import axios from "axios";
import { apiUrl } from "./url";

export type Device = {
  id: number;
  name: string;
  mac: string;
};

export const getDevices = async () => {
  const devices = await axios.get(`${apiUrl}/devices`);
  return devices.data as Device[];
};

export const callWol = async (device: Device) => {
  const res = await axios.post(`${apiUrl}/devices/wol`, device);
  return res;
};
