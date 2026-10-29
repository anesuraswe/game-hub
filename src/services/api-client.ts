import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "996a0834b84e4c0ea22767164d06e520",
  },
});
