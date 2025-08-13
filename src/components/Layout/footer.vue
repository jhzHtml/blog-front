<template>
    <div class="footer-img">
        <img class="animals" src="@/assets/images/animals.png" alt="">
    </div>
    <footer class="footer">
        <div class="main">
            <div class="footer-item">Copyright © 2025 Jhz版权所有.</div>
            <div class="footer-link">
                <a href="#" target="_blank">鲁ICP备2025179305号</a>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style lang="less" scoped>
.footer-img {
    position: sticky;
    bottom: 0;
    width: @width;
    margin: 0 auto;
    text-align: center;

    .animals {
        position: relative;
        bottom: -24px;
        max-width: 600px;
    }
}


.footer {
    .main {
        .flex-column();
        margin: 0 auto;
        padding: 30px 0;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        color: #787878;
        font-size: 14px;
        border-top: 1px solid #eee;

        .footer-item {
            margin-bottom: 20px;
        }

        .footer-link {
            .flex-center();
            gap: 20px;
        }
    }
}
</style>