<template>
  <div class="notes-card">
    <label
      class="notes-label"
      for="notes"
    >
      Your Notes
    </label>
    <div class="notes-container">
      <textarea
        id="notes"
        v-model="text"
        class="notes-textarea"
        placeholder="Write your notes ^-^"
        @keyup="setNote(text)"
      >
    </div>
      </textarea>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'NotesCard',
    data() {
      return {
        text: '',
      };
    },
    computed: {
      ...mapGetters([
        'getNote'
      ]),
    },
    created() {
      this.text = this.getNote;
      console.log(this.text);
    },
    methods: {
      ...mapActions([
        'setNote',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  .notes-card {
    display: grid;
    // grid-template-columns: minmax(22rem, 30rem);
    grid-template-columns: 1fr;
    grid-template-rows: max-content 25rem;
    align-items: start;

    .notes-label {
      font-weight: 700;
      font-size: $text-4xl;
      text-align: center;
    }

    .notes-container {
      display: grid;
      background-color: $very-dark-desaturated-blue;
      padding: $padding;
      border-radius: $border;
      min-height: 100%;
      box-shadow: 0 8px 20px #0000007f;

      .notes-textarea {
        background-color: $very-dark-desaturated-blue;
        padding: $padding;
        outline: none;
        height: 100%;
        resize: none;
      }
    }

    // ===== Scrollbar CSS =====
    // Firefox
    * {
      scrollbar-width: none;
      scrollbar-color: $dark-grayish-blue $very-dark-desaturated-blue !important;
    }

    // Chrome, Edge, and Safari
    *::-webkit-scrollbar {
      width: 16px;
    }

    *::-webkit-scrollbar-track {
      background: $very-dark-desaturated-blue !important;
    }

    *::-webkit-scrollbar-thumb {
      background-color: $dark-grayish-blue;
      border-radius: 10px;
      border: 3px solid $very-dark-desaturated-blue !important;
    }
  }
</style>