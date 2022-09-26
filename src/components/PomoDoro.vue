<template>
  <div :class="['pomo-doro', funcao]">
    <div class="timer">
      {{ renderTimer }}
      <br>
      {{ GetRenderTimer }}
    </div>


    <button @click="setTimer(workTime)">
      Bota no vuex
    </button>
    <button @click="startTimerVuex">
      Tira do vuex
    </button>
    <button :disabled="start" @click="estrictWork">estrito</button>

    <div>
      <div>workTime {{ workTime }}</div>
      <input
        v-model="workTime"
        type="number"
      >
      <br>
      <span>Resto: {{ timeLeft }}</span>
      <br>
      <span>Quantias: {{ quatidadePomodoros }}</span>
      <br>
      <button @click="setSettings">
        Seta pomodoro
      </button>
      <button @click="startTimer">
        Começa mano
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Pomodoro',
    data() {
      return {
        start: false,
        funcao: 'pomodoro',
        //
        workTime: 120,
        quatidadePomodoros: 0,
        timeLeft: 0,
        rules: {
          pomodoro: 25,
          shortBreak: 5,
          longBreak: 15,
        }
      };
    },
    computed: {
      ...mapGetters([
        'getTimerWork',
        'GetRenderTimer',
      ]),

      renderTimer() {
        let hour = (Math.floor(parseInt(this.workTime)/3600));
        let minutes = Math.floor((parseInt(this.workTime) / 60) - (hour*60));
        let seconds = (parseInt(this.workTime) % 60);
        // eslint-disable-next-line max-len, vue/max-len
        let render = `${hour < 10 ? `0${hour}` : hour} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;

        return render;
      }

    },
    created() {

    },
    methods: {
      ...mapActions([
        'startTimerVuex',
        'setTimer',
      ]),
      /**
       *
       * Seta configuracoes do pomodoro
       * tempo de pomodoro, shortBreak, longBreak
       *
       */
      setSettings() {
        this.workTime = parseInt(this.workTime)*60;
        this.setVezes();
        this.setTimeLeft();

      },
      setTimeLeft() {
        this.timeLeft = parseInt(this.workTime) % (parseInt(this.rules.pomodoro) + parseInt(this.rules.shortBreak));
      },
      setVezes() {
        // eslint-disable-next-line vue/max-len, max-len
        this.quatidadePomodoros = Math.floor(parseInt(this.workTime) / (parseInt(this.rules.pomodoro) + parseInt(this.rules.shortBreak)));
      },

      /**
       * Método responsavel por realizar a contagem regressiva
       * das seçoes do pomodoro, short break e long break
       * @param {*valor em minutos para o cronometro*} time
       */
      timer(time) {
        let count = time;

        this.start = !this.start;

        return new Promise((resolve) => {
          const interval = setInterval(() => {
            this.workTime--;
            count--;
            console.log(`time dentro: ${count}`);
            if (!count) {
              clearInterval(interval);
              resolve();
              console.log('resolveu');
            }
          }, 10);
        });
      },

      async startTimer() {
        console.log(this.funcao);

        if (this.funcao === 'pomodoro') {
          await this.timer(25);
          this.funcao = 'shortBreak';
          this.quatidadePomodoros--;
        } else if (this.funcao === 'shortBreak') {
          await this.timer(5);
          this.funcao = 'pomodoro';
        }
      },

      ///////////////////////////////////////////
      descontaTempo() {
        const interval = setInterval(() => {
          this.time--;
          if (!this.time) {
            clearInterval(interval);
            console.log('acabou');
          }
        }, 1000);
      },

      ///////////////////////////////////////////
      async exec() {
        this.time = 5;
        await this.temporizador();
        this.pause--;
        console.log('promessa ok');
      },

      async estrictWork() {
        do {
          if (this.funcao === 'pomodoro') {
            await this.timer(25);
            this.funcao = 'shortBreak';
            this.quatidadePomodoros--;
          } else if (this.funcao === 'shortBreak') {
            await this.timer(5);
            this.funcao = 'pomodoro';
          }
        } while (this.quatidadePomodoros > 0);
        console.log('promessa ok');
      },
    }
  };
</script>

<style lang="scss" scoped>
  .pomo-doro {
    height: 100%;

    .timer {
      background-color: $very-dark-desaturated-blue;
      display: grid;
      grid-template-columns: 480px;
      grid-template-rows: 285px;
      place-items: center;
      // height: 285px;
      // width: 480px;
      margin-top: 100px;
    }

    button {
      background-color: $very-dark-desaturated-blue;
      margin: 1rem;
    }

    input {
      background-color: $very-dark-desaturated-blue;
    }
  }
  // .pomodoro {
  //   background-color: tomato;
  // }
  // .shortBreak {
  //   background-color: darkcyan;
  // }
</style>