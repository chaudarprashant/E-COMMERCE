import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-q6yj.onrender.com", // 👈 your Render backend URL
  withCredentials: true, // if using cookies or sessions
});

export default instance;
