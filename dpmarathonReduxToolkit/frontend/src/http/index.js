import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3005/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const APIAuthenticated = axios.create({
  baseURL: "http://localhost:3005/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `${localStorage.getItem("token")}`,
  },
});
