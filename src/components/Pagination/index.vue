<template>
    <!-- 只有总页数大于1时才显示 -->
    <div class="pager-container" v-if="pageNumber > 1">
        <div class="pager-item" click="handleClick(1)" :class="{ disabled: current === 1 }">
            <i class="iconfont icon-verticalright"></i>
        </div>
        <div class="pager-item" @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">
            <i class="iconfont icon-left"></i>
        </div>
        <div class="pager-item" @click="handleClick(n)" v-for="(n, i) in numbers" :key="i"
            :class="{ active: n === current }">
            {{ n }}
        </div>
        <div class="pager-item" @click="handleClick(current + 1)" :class="{ disabled: current === pageNumber }">
            <i class="iconfont icon-right"></i>
        </div>
        <div class="pager-item" @click="handleClick(pageNumber)" :class="{ disabled: current === pageNumber }">
            <i class="iconfont icon-verticalleft"></i>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    current: {
        type: Number,
        default: 1,
    },
    total: {
        type: Number,
        default: 0,
    },
    limit: {
        type: Number,
        default: 10,
    },
    // 最大也显示的页码数量
    visibleNumber: {
        type: Number,
        default: 10,
    },
});

const emits = defineEmits(['pageChange']);

// 总页数(向上取整)
const pageNumber = computed(() => {
    return Math.ceil(props.total / props.limit);
})

// 得到显示页码的最小数
const visibleMin = computed(() => {
    let min = props.current - Math.floor(props.visibleNumber / 2);
    if (min < 1) {
        min = 1;
    }
    return min;
})

// 得到显示页码的最大数
const visibleMax = computed(() => {
    let max = visibleMin.value + props.visibleNumber - 1;
    if (max > pageNumber.value) {
        max = pageNumber.value;
    }
    return max;
});

const numbers = computed(() => {
    let nums = [];
    for (let i = visibleMin.value; i <= visibleMax.value; i++) {
        nums.push(i);
    }
    return nums;
});


const handleClick = (newPage) => {
    if (newPage < 1) {
        newPage = 1;
    }
    if (newPage > pageNumber.value) {
        newPage = pageNumber.value;
    }
    if (newPage === props.current) {
        return;
    }
    // 抛出事件
    emits('pageChange', newPage);
}
</script>

<style lang="less" scoped>
.pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .pager-item {
        width: 36px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        border-radius: 10px;
        color: @primary;
        margin: 0 4px;
        cursor: pointer;
        user-select: none;

        &:hover {
            background-color: #e4e4e7;
        }

        &.disabled {
            color: @disabled;
            cursor: not-allowed;
        }

        &.active {
            color: #fff;
            background-color: @primary;
            cursor: text;
        }
    }
}
</style>