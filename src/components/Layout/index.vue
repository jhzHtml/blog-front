<template>
    <div class="container">
        <Header />
        <div class="main">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from "./header.vue";
import Footer from "./footer.vue";
</script>

<style lang="less" scoped>
.container {
    min-width: @width;
    background-color: #f7f7f7;
    .flex-column();

    .main {
        min-height: calc(100vh - 100px);
        padding-top: 80px
    }
}
</style>