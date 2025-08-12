<template>
    <div class="header-container">
        <div class="main">
            <div class="site-name">码语人生</div>
            <ul>
                <li class="active">博文</li>
                <li>留言</li>
                <li>时间轴</li>
                <li>朋友圈</li>
            </ul>
        </div>

    </div>
</template>

<script setup></script>

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

        li {
            width: 100px;
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