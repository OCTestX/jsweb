<script setup>
// 参数在这里接受
// defineProps({
//   iconSrc,
//   title: String,
//   msg: String,
//   click: Any,
// })
const { iconSrc, title, msg, click } = defineProps(['iconSrc', 'title', 'msg', 'click']) // 可以简写 解构
</script>

<template>
    <el-button @click = "click" class="item">
        <el-col>
            <el-row>
                <el-image style="width: 5em; height: 5em" :src = "iconSrc"/>
                <h1 class="title">{{ title }}</h1>
            </el-row>
            <el-text class="mx-1" type="info">{{msg}}</el-text>
        </el-col>
    </el-button>
</template>

<style scoped>
.item {
    border-style:solid;
    border-width:medium;
    border-radius: 25px;
    padding: 25px;
    height: fit-content;
    width: 100%;
    margin-top: 6px;
    background-image: image-set("/src/assets/logo.svg");
}
.title {
    font-weight: 500;
    font-size: 2.6rem;
}
</style>
