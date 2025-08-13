<template>
    <div class="header-container">
        <div class="main">
            <div class="site-name">码语人生</div>
            <ul>
                <li v-for="(item, index) in list" :key="index" :class="{ active: isActive(item.path) }"
                    @click="handleToPath(item.path)">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isActive = (path) => {
    return route.path === path;
}

const list = ref([
    { name: "博文", path: "/" },
    { name: "留言", path: "/message" },
    { name: "时间轴", path: "/timeline" },
    { name: "聊天室", path: "/chatRoom" },
    { name: "关于我", path: "/about" },
]);


const handleToPath = (path) => {
    router.push({ path });
}
</script>

<style lang="less" scoped>
.header-container {
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .09);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;

    .main {
        width: @width;
        .flex-between();
        margin: 0 auto;
        height: 60px;
        line-height: 60px;
    }

    ul {
        .flex-end();
        color: @text;
        gap: 10px;

        li {
            width: 90px;
            text-align: center;
            list-style: none;
            margin: 0;
            padding: 0;
            cursor: pointer;
            position: relative;

            &::before {
                content: "";
                width: 100%;
                height: 2px;
                background-color: @primary;
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                display: none
            }

            &.active {
                color: @primary;

                &::before {
                    display: block;
                }
            }
        }
    }
}
</style>