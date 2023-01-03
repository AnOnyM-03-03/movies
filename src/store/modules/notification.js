import mutation from "@/store/mutation";

const { SHOW_TOAST_NOTIFY } = mutation;

const notification = {
  state: {
    messagePool: [],
  },
  getters: {
    messagePool: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    SHOW_TOAST_NOTIFY(state, message) {
      state.messagePool.push(message);
    },
  },
  actions: {
    showNotify({ commit }, message) {
      commit(SHOW_TOAST_NOTIFY, message);
    },
  },
};
export default notification;
