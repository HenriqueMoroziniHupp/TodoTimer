<template>
  <div>
    <label>Elapsed Time: <progress :value="elapsed / duration" /></label>

    <div>{{ (elapsed / 1000).toFixed(1) }}s</div>
    <div>elapsed: {{ (elapsed / 10000).toFixed(1)*10 }}</div>

    <div>
      Duration: <input
        v-model="duration"
        type="range"
        min="1"
        max="30000"
      >
      {{ (duration / 1000).toFixed(1) }}s
    </div>

    <button @click="elapsed = 0">
      Reset
    </button>
  </div>
</template>

<script>
  export default {
    name: 'TestVue',
    data() {
      return {
        duration: 15 * 1000,
        elapsed: 0,
      };
    },
    created() {
      let lastTime = performance.now();


      const update = () => {
        const time = performance.now();

        this.elapsed += Math.min(time - lastTime, this.duration - this.elapsed);
        lastTime = time;
        this.handle = requestAnimationFrame(update);
        // console.log(Date.UTC);
      };

      update();
    },
    unmounted() {
      cancelAnimationFrame(this.handle);
    }
  };
  </script>

  <style>
  .elapsed-container {
    width: 300px;
  }

  .elapsed-bar {
    background-color: red;
    height: 10px;
  }
  </style>