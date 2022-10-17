import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import timer from './modules/timer';
import todo from './modules/todo';
import notes from './modules/notes';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notes,
    timer,
    todo,
  },
  plugins: [
    createPersistedState({
      key: 'todo',
      storage: window.localStorage
    })
  ]
});