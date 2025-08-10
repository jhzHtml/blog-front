import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 重置样式表
import "normalize.css";

// 粒子动画
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Particles, {
    init: async engine => {
        // await loadFull(engine);
        await loadSlim(engine);
    },
});

app.mount('#app');
