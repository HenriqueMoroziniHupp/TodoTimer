<template>
  <div :class="['timer-card', funcao]">
    <h1 class="card__title">
      Tarefas
    </h1>
    <div class="card">
      <span class="card__timer">{{ getRenderTimer }}</span>
      <button @click="showModal = true">
        Configurações
      </button>
      <div class="card__button">
        <button
          v-if="getPause"
          @click="start"
        >
          Start
        </button>
        <button
          v-else
          @click="stop"
        >
          Stop
        </button>
        <button @click="setReset">
          Resetar
        </button>
      </div>
    </div>




    <transition
      name="modal"
    >
      <ModalSettings
        v-show="showModal"
        class="modal-settings"
        @close="closeOnSave($event)"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ModalSettings from './ModalSettings';

  export default {
    name: 'Pomodoro',
    components: {
      ModalSettings
    },
    data() {
      return {
        showModal: false,
        funcao: 'pomodoro',
        //
        time: {
          minutes: 0,
          hour: 0
        },
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
        'getRenderTimer',
        'getPause',
      ]),

    },
    created() {
      this.default();
    },
    methods: {
      ...mapActions([
        'default',
        'startTimerVuex',
        'setTimer',
        'setPause',
        'setReset',
      ]),
      start() {
        this.setPause(false);
        this.startTimerVuex();
      },
      stop() {
        this.setPause(true);

      },
      setTimeLeft() {
        this.timeLeft = parseInt(this.workTime) % (parseInt(this.rules.pomodoro) + parseInt(this.rules.shortBreak));
      },
      setVezes() {
        // eslint-disable-next-line vue/max-len, max-len
        this.quatidadePomodoros = Math.floor(parseInt(this.workTime) / (parseInt(this.rules.pomodoro) + parseInt(this.rules.shortBreak)));
      },
      closeOnSave(event) {
        this.showModal = false;
        this.setTimer(event);
      },

      ///////////////////////////////////////////
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

      descontaTempo() {
        const interval = setInterval(() => {
          this.time--;
          if (!this.time) {
            clearInterval(interval);
            console.log('acabou');
          }
        }, 1000);
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
  .timer-card {
    display: grid;
    grid-template-columns: minmax(22rem, 30rem);
    grid-template-rows: max-content 25rem;
    height: 100%;

    .card {
      background-color: $very-dark-desaturated-blue;
      display: grid;
      grid-template-rows: 1fr repeat(2, max-content);
      place-items: center;
      border-radius: $border;
      box-shadow: 0 8px 20px #0000007f;

      &__timer {
        font-size: 3.5rem;
        font-weight: 700;
      }

      &__title {
        font-size: $text-4xl;
        font-weight: 700;
        text-align: center;
      }
    }

    button {
      color: $very-dark-desaturated-blue;
      background-color: $light-grayish-blue;
      margin: 1rem;
      padding: $padding;
      border-radius: $border;
      border-bottom: solid 0.25rem $dark-grayish-blue;
      width: 8rem;
      outline: none;
    }

    input {
      background-color: $very-dark-desaturated-blue;
    }

    .modal-enter-active,
    .modal-leave {
      opacity: 0;
    }

    .modal-enter-from,
    .modal-leave-to {
      transition: opacity 0.2s ease;
    }
  }
  // .pomodoro {
  //   background-color: tomato;
  // }
  // .shortBreak {
  //   background-color: darkcyan;
  // }
</style>