<template>
  <RouterView />
  <vue-particles id="tsparticles" :options="particlesOptions" />
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router';
import options from "../config/particles.js"

const particlesOptions = ref(options);
</script>

<style>
#app {
  background-color: #f7f7f7;
}
</style>
