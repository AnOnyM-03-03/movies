import mutation from "@/store/mutation";

const { TOGGLE_LOADER } = mutation;

const loader = {
  state: {
    isShowLoader: false,
  },
  getters: {
    isShowLoader: ({ isShowLoader }) => isShowLoader,
  },
  mutations: {
    [TOGGLE_LOADER](state, bool) {
      state.isShowLoader = bool;
    },
  },
  actions: {
    toggleLoader({ commit }, bool) {
      commit(TOGGLE_LOADER, bool);
    },
  },
};
export default loader;
