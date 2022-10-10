<template>
  <div class="modal-settings">
    <div class="modal-card">
      <div>Minutos {{ workTime }}</div>
      <input
        v-model="workTime"
        type="number"
      >
      <button
        @click="$emit('close', parseInt(workTime*60))"
      >
        Salvar
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'ModalSettings',
    data() {
      return {
        minutes: 0,
        hour: 0,
        workTime: 0,
      };
    },
    computed: {
      ...mapGetters([
        'getTimerWork'
      ])
    },
    methods: {
      ...mapActions([
        'startTimerVuex',
        'setTimer'
      ])
    },
};
</script>

<style lang="scss" scoped>
.modal-settings {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    transition: opacity 0.3s ease;
    background-color: rgba(0, 0, 0, 0.5);

    .modal-card {
      background-color: $very-dark-desaturated-blue;
      display: grid;
      grid-template-columns: 300px;
      grid-template-rows: 150px;
      place-items: center;
      padding: 2rem;
    }

    button {
      margin: 1rem;
      background-color: $very-dark-desaturated-blue;
    }

    input {
      border-color: aliceblue;
      background-color: aliceblue;
    }
}
</style>