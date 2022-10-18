export default {
  state: {
    note: '',
  },
  getters: {
    getNote: (state) => state.note,
  },
  actions: {
    setNote({ commit }, note) {
      commit('SET_NOTE', note);
    },
  },
  mutations: {
    SET_NOTE(state, payload) {
      state.note = payload;
    }
  },
};