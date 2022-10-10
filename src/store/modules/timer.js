export default {
  state: {
    workTime: 0,
    pause: true,
  },

  getters: {
    getTimerWork: (state) => state.workTime,
    getRenderTimer: (state) => {
      let hour = (Math.floor(parseInt(state.workTime)/3600));
      let minutes = Math.floor((parseInt(state.workTime) / 60) - (hour*60));
      let seconds = (parseInt(state.workTime) % 60);

      let renderHour = `${hour < 10 ? `0${hour}` : hour}`;
      let renderMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
      let renderSeconds = `${seconds < 10 ? `0${seconds}` : seconds}`;

      let renderTimer = `${renderHour} : ${renderMinutes} : ${renderSeconds}`;

      return renderTimer;
    },
    getPause: (state) => state.pause,
  },

  actions: {
    default({ commit }) {
      commit('SET_PAUSE', true);
    },
    startTimerVuex({ commit, state }) {
      // let count = parseInt(time);
      // return new Promise((resolve) => {
        if(!state.pause && state.workTime > 0) {
          const interval = setInterval(() => {
            console.log(`time dentro: ${state.workTime}`);
            if (state.workTime <= 0 || state.pause) {
              commit('SET_PAUSE', true);
              clearInterval(interval);
              // resolve();
              console.log('resolveu');
            } else commit('DECREMENT');
          }, 100);
        }
      // });
    },
    setTimer({ commit }, time) {
      commit('SET_TIMER', parseInt(time));
    },
    setReset({ commit }) {
      commit('SET_PAUSE', true);
      commit('SET_TIMER', parseInt(0));
    },
    setPause({ commit }, pause) {
      commit('SET_PAUSE', pause);
    },
  },

  mutations: {
    SET_TIMER(state, payload) {
      state.workTime = payload;
    },
    DECREMENT(state) {
      state.workTime--;
    },
    SET_PAUSE(state, payload) {
      state.pause = payload;
    }
  },
};
