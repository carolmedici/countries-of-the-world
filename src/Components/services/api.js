import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/all?fields=name,flag,language,capital",
});

export default api;
