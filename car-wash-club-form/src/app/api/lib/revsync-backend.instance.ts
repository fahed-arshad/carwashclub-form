import axios from "axios";

export const revSyncInstance = axios.create({
  baseURL: "http://localhost:4448",
});
