<script setup>
import SheTuanFengCai from './SheTuanFengCai/main-SheTuanFengCai.vue'
import Avatar from './components/js-avatar.vue'
import { ref } from 'vue'

const activeName = ref('社团风采')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<template>

  <main class="col">
    <el-row>
      <h1 class="title">暨实社区</h1>
      <!-- TODO 缺少uid属性 -->
      <Avatar class="avatar"/>
    </el-row>
    <el-tabs v-model="activeName" class="mainPageSelector" @tab-click="handleClick">
      <el-tab-pane label="社团风采" name="社团风采">
        <SheTuanFengCai />
      </el-tab-pane>
      <el-tab-pane label="公共聊天室" name="公共聊天室">Config</el-tab-pane>
    </el-tabs>
  </main>
</template>

<style scoped>
.col {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  padding: 3em;
}
.title {
  flex-grow: 1;
}
.avatar {
  size: 6em;
  margin: 1em;
}
.mainPageSelector > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
