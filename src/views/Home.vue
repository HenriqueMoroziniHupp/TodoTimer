<template>
  <main class="home">
    <TodoCard />
    <!-- <PomoDoro /> -->
  </main>
</template>

<script>
import TodoCard from '../components/todo/TodoCard.vue';
// eslint-disable-next-line no-unused-vars
import PomoDoro from '../components/PomoDoro.vue';

export default {
  name: 'Home',
  components: {
    TodoCard,
    // eslint-disable-next-line vue/no-unused-components
    // PomoDoro
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
