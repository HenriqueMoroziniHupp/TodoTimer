import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import timer from './modules/timer';
import todo from './modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    timer,
    todo
  },
  plugins: [
    createPersistedState({
      key: 'todo',
      storage: window.localStorage
    })
  ]
});