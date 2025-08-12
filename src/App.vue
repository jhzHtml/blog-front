<template>
  <Layout>
    <RouterView />
  </Layout>
  <vue-particles id="tsparticles" :options="particlesOptions" />
</template>

<script setup>
import { ref } from "vue";
import Layout from "@/components/Layout/index.vue";
import { RouterLink, RouterView } from 'vue-router';
import options from "../config/particles.js"

const particlesOptions = ref(options);
</script>

<style>
/* 定义全局滚动条样式 */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #cacac9;
}
</style>
