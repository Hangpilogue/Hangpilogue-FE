import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  timeout:2000,
})

// instance.defaults.headers.common["Authorization"] = USER_TOKEN

export default instance