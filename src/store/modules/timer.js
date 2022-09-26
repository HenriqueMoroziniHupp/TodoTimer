export default {
  state: {
    workTime: 0,
    pause: false,
  },

  getters: {
    getTimerWork: (state) => state.workTime,
    GetRenderTimer: (state) => {
      let hour = (Math.floor(parseInt(state.workTime)/3600));
      let minutes = Math.floor((parseInt(state.workTime) / 60) - (hour*60));
      let seconds = (parseInt(state.workTime) % 60);

      let renderHour = `${hour < 10 ? `0${hour}` : hour}`;
      let renderMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
      let renderSeconds = `${seconds < 10 ? `0${seconds}` : seconds}`;

      let renderTimer = `${renderHour} : ${renderMinutes} : ${renderSeconds}`;

      return renderTimer;
    }
  },

  actions: {
    startTimerVuex({ commit }) {
      commit('DECREMENT');
    },
    setTimer({ commit }, time) {
      commit('SET_TIMER', parseInt(time));
    }
  },

  mutations: {
    SET_TIMER(state, payload) {
      state.workTime = payload;
    },
    DECREMENT(state) {
      state.workTime--;
    }
  },
};
