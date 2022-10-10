<template>
  <div class="todo-card">
    <h1 class="todo__title">
      Tarefas
    </h1>
    <div class="todo__wrapper">
      <form class="todo__form">
        <input
          v-model="text"
          type="text"
          class="todo__form__input"
          placeholder="Criar nova tarefa..."
        >
        <button
          class="todo__form__btn-add"
          @click.prevent="addNewTodo(text)"
        >
          <img
            src="../../assets/img/icon-cross.svg"
            alt="Adicionar tarefa"
          >
        </button>
      </form>
      <div class="todo__list">
        <h2 class="todo__list__title">
          Pendentes
        </h2>
        <li
          v-for="todo in notDoneTodos"
          :key="todo.id"
          :class="['todo__list__items', { 'todo__list__items--check': todo.done }]"
        >
          <button
            class="btn-check"
            @click="toggleTodo(todo)"
          >
            <img
              v-if="todo.done"
              src="../../assets/img/icon-check.svg"
              alt="Checked Item"
              class="btn-check__icon"
            >
          </button>
          <p class="item">
            {{ todo.text }}
          </p>
          <button
            class="btn-destoy"
            @click="destroyTodo(todo)"
          >
            <img
              src="../../assets/img/icon-cross.svg"
              alt="Apagar item"
              class="btn-destroy__icon"
            >
          </button>
        </li>
      </div>
      <div class="todo__list">
        <h2 class="todo__list__title">
          Concluídas
        </h2>
        <li
          v-for="todo in doneTodos"
          :key="todo.id"
          :class="['todo__list__items', { 'todo__list__items--check': todo.done }]"
        >
          <button
            class="btn-check"
            @click="toggleTodo(todo)"
          >
            <img
              v-if="todo.done"
              src="../../assets/img/icon-check.svg"
              alt="Checked Item"
              class="btn-check__icon"
            >
          </button>
          <p class="item">
            {{ todo.text }}
          </p>
          <button
            class="btn-destoy"
            @click="destroyTodo(todo)"
          >
            <img
              src="../../assets/img/icon-cross.svg"
              alt="Apagar item"
              class="btn-destroy__icon"
            >
          </button>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'TodoCard',
    components: {},
    data() {
      return {
        text: '',
      };
    },
    computed: {
      ...mapGetters([
        'allTodos',
        'doneTodos',
        'notDoneTodos',
     ]),
    },
    created() {
      // this.fetchTodo();
    },
    methods: {
      ...mapActions([
      'fetchTodo',
      'addTodo',
      'destroyTodo',
      'toggleTodo'
      ]),
      addNewTodo(text) {
        this.addTodo(text);
        this.text = '';
      },
      mostraTodos() {
        this.notDoneTodos.forEach(todo => {
          console.log(todo);
        });
      }
    },
  };
</script>

<style lang="scss" scoped>
.todo-card {
  display: grid;
  grid-template-columns: 22rem;
  align-content: start;
  .todo__title {
    font-size: $text-4xl;
    font-weight: 700;
    text-align: center;
  }

  .todo__wrapper {
    display: grid;
    gap: 2rem;
  }
  .todo__form {
    display: grid;
    grid-template-columns: auto max-content;
    background-color: $very-dark-desaturated-blue;
    padding: $padding;
    border-radius: $border;

    &__input {
      background-color: transparent;
      padding: $padding;
      outline: none;
    }

    &__btn-add {
      transform: rotate(45deg);
      outline: none;
    }
  }

  .todo__list {
    display: grid;
    background-color: $very-dark-desaturated-blue;
    border-radius: $border;
    box-shadow: 0 8px 20px #0000007f;
    list-style-type: none;

    &__title {
      text-align: center;
      font-size: 1.1rem;
      margin: 0.2rem;
      border-bottom: solid 1px $dark-grayish-blue;
    }

    &__items {
      display: grid;
      grid-template-columns: max-content auto max-content;
      gap: 1rem;
      align-items: center;
      padding: $padding;
      text-decoration: none;

      &--check {
        text-decoration: line-through;
      }

      .btn-check {
        height: 1.5rem;
        width: 1.5rem;
        border: solid 1px $dark-grayish-blue;
        border-radius: 50%;
        margin: 0 auto;
        outline: none;

        &__icon {
          width: 1.2rem;
          margin: auto auto 0.2rem 0.4rem;
        }
      }

      .btn-destoy {
        outline: none;
      }
    }
  }
}
</style>

