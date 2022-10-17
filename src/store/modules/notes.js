export default {
  state: {
    note: 'vuex',
  },
  getters: {
    getNote: (state) => state.note,
  },
  actions: {
    setNote({ commit }, note) {
      commit('SET_NOTE', note);
      console.log(note);
    },
  },
  mutations: {
    SET_NOTE(state, payload) {
      state.note = payload;
    }
  },
};