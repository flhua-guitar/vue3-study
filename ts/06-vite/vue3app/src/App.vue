<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- <composition /> -->
  <composition2 />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import composition from "./components/composition.vue";
import composition2 from "./components/composition2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    composition,
    composition2,
  },
};
</script>
 