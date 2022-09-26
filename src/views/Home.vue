<template>
  <main class="home">
    <TodoCard />
    <!-- <TestVue /> -->
    <PomoDoro />
  </main>
</template>

<script>
import TodoCard from '../components/todo/TodoCard.vue';
// eslint-disable-next-line no-unused-vars
import PomoDoro from '../components/PomoDoro.vue';
import TestVue from '../components/TestVue.vue';

export default {
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TodoCard,
    // eslint-disable-next-line vue/no-unused-components
    TestVue,
    // eslint-disable-next-line vue/no-unused-components
    PomoDoro
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
