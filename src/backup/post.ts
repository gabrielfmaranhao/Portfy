import axios from "axios";

const token = localStorage.getItem("@portfy(token)");

export const Request = axios.create({
  baseURL: "https://api-portfy.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
