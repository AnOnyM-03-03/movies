import axios from "@/plugins/axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies() {
      const responce = await axios.get("/");
      console.log(responce);
    },
  },
};

export default moviesStore;
