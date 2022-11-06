import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    apikey: process.env.VUE_APP_API_KEY,
    plot: "short",
    i: "tt3896198",
  },
});

export default instance;
