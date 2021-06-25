<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "@/components/Home.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  max-width: 100%;
}
</style>
