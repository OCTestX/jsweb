<script setup>
// 参数在这里接受
defineProps({
  uid: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <el-row class="item">
        <el-button v-if="uid == None" type="primary" plain>登陆</el-button>
        <el-avatar v-if="uid != None" class="avatar" src = "/src/assets/avatar.svg"/>
    </el-row>
  </div>
</template>

<style scoped>
.item {


}
.avatar {
    width: 2.5em;
    height: 2.5em;
}
</style>
