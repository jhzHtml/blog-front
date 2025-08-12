<template>
    <div class="card-item">
        <img class="card-img" src="https://bos.codinglife.online/B/B-08.png" alt="" />
        <div class="card-right">
            <div class="card-right-top">
                <div class="card-name">fuwafuwa品牌设计</div>
                <div class="card-description">lixin：希望每一口，都能让你和快乐撞个满怀~lixin：希望每一口，都能让你和快乐撞个满怀lixin：希望每一口，都能让你和快乐撞个满怀
                    lixin：希望每一口，都能让你和快乐撞个满怀lixin：希望每一口，都能让你和快乐撞个满怀</div>
            </div>
            <div class="card-detail-list">
                <div class="detail-item">
                    <i class="iconfont icon-tag"></i>
                    <span>始终热爱生活</span>
                </div>
                <div class="detail-item">
                    <i class="iconfont icon-time-circle"></i>
                    <span>2025-08-10</span>
                </div>
                <div class="detail-item">
                    <i class="iconfont icon-eye"></i>
                    <span>20</span>
                </div>
                <div class="detail-item">
                    <i class="iconfont icon-message"></i>
                    <span>0</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="less" scoped>
.card-item {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    padding: 20px;
    gap: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    .flex-start();
    transition: .3s ease-in;
    background: linear-gradient(0, #01aaed 1px, #01aaed 0) no-repeat, linear-gradient(-90deg, #01aaed 1px, #01aaed 0) no-repeat, linear-gradient(-180deg, #01aaed 1px, #01aaed 0) no-repeat, linear-gradient(-270deg, #01aaed 1px, #01aaed 0) no-repeat;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-size: 0 1px, 1px 0, 0 1px, 1px 0;
    background-color: #fff;

    &:hover {
        background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
    }

    .card-img {
        width: 200px;
        max-height: 100%;
    }

    .card-right {
        height: 100%;
        justify-content: space-between;
        .flex-column();

        .card-right-top {
            .card-name {
                font-size: 18px;
            }

            .card-description {
                font-size: 14px;
                line-height: 24px;
                color: #787878;
                padding-top: 6px;
                .text-multiple();
            }
        }

        .card-detail-list {
            .flex-start();
            gap: 20px;

            .detail-item {
                .flex-start();
                gap: 4px;
                color: #787878;
                font-size: 14px;
            }
        }
    }
}
</style>