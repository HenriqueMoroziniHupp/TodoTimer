<template>
  <main class="home">
    <TodoCard class="todo" />
    <!-- <TestVue /> -->
    <TimerCard class="time" />
    <NotesCard class="notes" />
  </main>
</template>

<script>
import TodoCard from '../components/todo/TodoCard.vue';
// eslint-disable-next-line no-unused-vars
import TimerCard from '../components/timer/TimerCard.vue';
import TestVue from '../components/TestVue.vue';
import NotesCard from '../components/notes/NotesCard.vue';

export default {
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TodoCard,
    // eslint-disable-next-line vue/no-unused-components
    TestVue,
    // eslint-disable-next-line vue/no-unused-components
    TimerCard,
    NotesCard
}
};
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;
  display: grid;
  place-content: center;
  gap: 1rem;
  grid-template-columns: max-content;
  grid-template-rows: repeat(3, max-content);
  grid-template-areas:
    'time'
    'notes'
    'todo';

  .todo {
    grid-area: todo;
    justify-self: center;
  }

  .time {
    grid-area: time;
  }

  .notes {
    grid-area: notes;
  }
}

@media (min-width: 1024px) {
  .home {
    grid-template-columns: max-content max-content;
    grid-template-rows: max-content max-content;
    grid-template-areas:
      'todo time'
      'todo notes';
  }
}
</style>
