import axios from "axios";

export const revSyncInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API || "http://localhost:4448",
});
