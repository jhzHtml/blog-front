<template>
    <div class="home-container">
        <div class="main">
            <section class="list">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Pagination :total="100" />
            </section>
            <aside class="right">
                <div class="user-info">
                    <div class="bg-img"></div>
                    <img class="avatar" src="https://codinglife.online/img/ZhihuIcon.4afbfd37.jpg" alt="" srcset="" />
                    <div class="user-name">编程 & 人生</div>
                    <div class="user-btn">博客源码</div>
                    <div class="user-detail">
                        <div class="detail-item">
                            <span class="number">28</span>
                            <span class="title">文章数量</span>
                        </div>
                        <div class="detail-item">
                            <span class="number">28</span>
                            <span class="title">评论数量</span>
                        </div>
                        <div class="detail-item">
                            <span class="number">28</span>
                            <span class="title">留言数量</span>
                        </div>
                    </div>
                </div>
                <div class="category-box">
                    <div class="category-title">
                        <i class="iconfont icon-slack"></i>
                        <span>文章分类</span>
                    </div>
                    <div class="category-list">
                        <div class="category-item">始终热爱生活</div>
                        <div class="category-item">前端技术</div>
                        <div class="category-item">后端技术</div>
                        <div class="category-item">服务器运维</div>
                    </div>
                </div>
                <div class="tag-box">
                    <div class="tag-title">
                        <i class="iconfont icon-tag"></i>
                        <span>标签</span>
                    </div>
                    <div class="tag-list">
                        <div class="tag-item">标签1</div>
                        <div class="tag-item">标签1</div>
                        <div class="tag-item">标签1</div>
                        <div class="tag-item">标签1</div>
                        <div class="tag-item">标签1</div>
                        <div class="tag-item">标签1</div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import Card from "./components/card.vue";
import Pagination from "@/components/Pagination/index.vue"

</script>

<style lang="less" scoped>
.home-container {
    width: 100%;
    color: #333;

    .main {
        width: @width;
        margin: 0 auto;
        .flex-start();
        align-items: flex-start;
        gap: 20px;

        .list {
            width: 75%
        }

        .right {
            width: 25%;
            .flex-column();
            gap: 20px;
            margin-bottom: 20px;

            .user-info {
                width: 100%;
                background-color: #fff;
                position: relative;

                .bg-img {
                    width: 100%;
                    height: 120px;
                    background: url("https://codinglife.online/img/zhihu-bg.07e4d89d.jpg") no-repeat center center;
                    background-size: 100% 100%;
                }

                .avatar {
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    border: 5px solid hsla(0, 0%, 100%, .5);
                    position: absolute;
                    left: 50%;
                    top: 80px;
                    transform: translateX(-50%);
                }

                .user-name {
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                    margin-top: 80px;
                }

                .user-btn {
                    width: 120px;
                    padding: 10px 0;
                    text-align: center;
                    color: #fff;
                    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
                    background-size: 400%;
                    border-radius: 6px;
                    margin: 10px auto;
                }

                .user-detail {
                    padding: 20px 14px;
                    border-top: 1px solid #eee;
                    .flex-between();

                    .detail-item {
                        .flex-column();
                        justify-content: center;
                        align-items: center;
                        gap: 10px;

                        .number {
                            font-size: 18px;
                        }

                        .title {
                            color: #787878;
                            font-size: 14px;
                        }
                    }
                }
            }

            .category-box {
                padding: 20px;
                background-color: #fff;

                .category-title {
                    color: @primary;
                    border-bottom: 1px solid @primary;
                    padding-bottom: 10px;
                    .flex-start();
                    gap: 5px;
                }

                .category-list {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    padding-top: 10px;
                    gap: 10px;

                    .category-item {
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        border: 1px solid @primary;
                        font-size: 14px;
                        cursor: pointer;
                        user-select: none;
                    }
                }
            }

            .tag-box {
                padding: 20px;
                background-color: #fff;

                .tag-title {
                    .flex-start();
                    color: @primary;
                    border-bottom: 1px solid @primary;
                    padding-bottom: 10px;
                    gap: 5px;
                }

                .tag-list {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    padding-top: 10px;
                    gap: 10px;

                    .tag-item {
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        background-color: #fafafa;
                        border-radius: 4px;
                        font-size: 14px;
                        cursor: pointer;
                        user-select: none;
                    }
                }
            }
        }
    }
}
</style>