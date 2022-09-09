import axios from "axios";
const token = localStorage.getItem("@portfy(token)")
const api = axios.create({
  baseURL: "https://api-portfy.herokuapp.com",
  timeout: 5000,
  headers: {
    "Authorization": `Bearer ${token}`,
  },
});

export default api;
