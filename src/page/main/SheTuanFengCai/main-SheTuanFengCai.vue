<script setup>
import SheTuanItem from './components/SheTuanItem.vue'
const clicked = () => {
    console.log("885848")
    location.href = "/src/page/sheTuanFengCai/keJiChuanXinShe/index.vue"
}
</script>


<template>

    <header>
        <div class="top-image">
            <el-image src="/src/assets/logo.svg" />
        </div>
    </header>
    <main>
        <SheTuanItem icon-src="/src/assets/logo.svg" title="科技创新社团" msg="hdsujfdhdskdsadfa" :click="clicked"></SheTuanItem>
    </main>
</template>

<style scoped>
div.top-image {
    background-color:aqua;
}
</style>
