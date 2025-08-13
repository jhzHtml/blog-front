<template>
    <div class="message-container">
        <div class="form-box">
            <form class="form" action="#">
                <input name="nickname" type="text" placeholder="用户昵称" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Hi，留个言吧"></textarea>
                <button type="submit" @click.prevent="handleSubmit">留言</button>
            </form>
        </div>
        <div class="message-list">
            <div class="message-item">
                <img class="avatar" src="@/assets/images/rainbow.gif" alt="" srcset="">
                <div class="message-detail">
                    <div class="message-detail-top">
                        <div class="detail-left">
                            <div class="name">昵称</div>
                            <div class="address">
                                <i class="iconfont icon-location"></i>
                                <span>威海市</span>
                            </div>
                        </div>
                        <div class="time">2025-00-00 00:00:00</div>
                    </div>
                    <div class="message-content">标题标题</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const handleSubmit = () => {
    console.log("提交");
}
</script>

<style lang="less" scoped>
.message-container {
    .form-box {
        width: 100%;
        height: calc(100vh - 40px);
        background: url("@/assets/images/wh_xfgy.jpg") no-repeat center center;
        background-size: 100% 100%;
        padding-top: 100px;

        .form {
            .flex-column();
            width: fit-content;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;

            input[name="nickname"],
            textarea {
                width: 600px;
                outline: none;
                border: 1px dashed #b4b8bc;
                border-radius: 6px;
                margin-bottom: 20px;
                box-sizing: border-box;
            }

            input[name="nickname"] {
                height: 40px;
                line-height: 40px;
                padding-left: 20px;
            }

            textarea {
                text-indent: 1em;
            }

            button {
                width: 100px;
                height: 32px;
                line-height: 32px;
                color: #fff;
                background-color: @primary;
                border: none;
                border-radius: 4px;
                margin-left: auto;
                cursor: pointer;
            }
        }
    }

    .message-list {
        width: @width;
        background-color: #fff;
        padding: 20px;
        margin: 20px auto;

        .message-item {
            padding: 10px;
            border-bottom: 1px solid #eee;
            gap: 10px;
            .flex-start();

            .avatar {
                width: 50px;
                height: 50px;
            }

            .message-detail {
                flex: 1;
                min-width: 0;

                .message-detail-top {
                    .flex-between();

                    .detail-left {
                        gap: 10px;
                        .flex-start();
                    }
                }
            }
        }
    }
}
</style>