import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // Variaveis com estados globais
  state: {
    todos: []
  },
  // Retorna para o componente dados de state
  // É apenas para leitura
  getters: {
    allTodos: (state) => state.todos,
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    notDoneTodos: (state) => state.todos.filter((todo) => !todo.done ) //notDone
  },
  // Chama as mutations
  actions: {
    // Dados vem de uma api, para estudos estou utilizando um array local
    fetchTodo({ commit }) {
      const todos = [
        { id: 1, text: 'Lorem ipsum dolor sit amet', done: false },
        { id: 2, text: 'Lorem ipsum dolor sit amet', done: false },
        { id: 3, text: 'Lorem ipsum dolor sit amet', done: true },
        { id: 4, text: 'Lorem ipsum dolor sit amet', done: true },
        { id: 5, text: 'Lorem ipsum dolor sit amet', done: true },
      ];

      commit('SET_TODOS', todos);
    },
    addTodo({ state, getters, commit }, text) {
      const newTodo = {
        id: state.todos.length + 1,
        text: text,
        done: false,
      };
      const newTodos = getters.allTodos;

      newTodos.push(newTodo);
      commit('SET_TODOS', newTodos);
    },
    destroyTodo({ commit, getters }, todo) {
      const index = this.state.todos.indexOf(todo);

      if (index !== -1) {
        const newTodos = getters.allTodos;

        newTodos.splice(index, 1);
        commit('SET_TODOS', newTodos);
        console.log('Apagou o TODO');
      }
    },
    markAsDone({ commit, getters }, todo) {
      const index = this.state.todos.indexOf(todo);
      const newTodos = getters.allTodos;

      newTodos[index].done = true;
      commit('SET_TODOS', newTodos);
    },
    markAsUndone({ commit, getters }, todo) {
      const index = this.state.todos.indexOf(todo);
      const newTodos = getters.allTodos;

      newTodos[index].done = false;
      commit('SET_TODOS',newTodos);
    },
    toggleTodo({ commit, getters }, todo) {
      const index = this.state.todos.indexOf(todo);
      const newTodos = getters.allTodos;

      newTodos[index].done = !newTodos[index].done;
      commit('SET_TODOS', newTodos);
    }
  },
  // Mutations mudam o estado das variaveis globais
  mutations: {
    // Parametro state é o state: {}
    // Parametro data é o que state irá receber, vem das actions
    SET_TODOS(state, payload) {
      state.todos = payload;
    },
  },
  modules: {
  },
});
