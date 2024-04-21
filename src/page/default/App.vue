<!-- 这里是主代码 -->
<script setup>
import HelloWorld from '/src/page/default/components/HelloWorld.vue'
import TheWelcome from '/src/page/default/components/TheWelcome.vue'
</script>

<template>
  <header>
    <!-- 显示V图片 -->
    <img alt="Vue logo" class="logo" src="/src/assets/logo.svg" width="125" height="125" />

    <!-- 显示上部标题 -->
    <div class="wrapper">
      <!-- 调用了HelloWorld.vue文件，接受一个msg参数 -->
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <!-- 调用了TheWelcome.vue文件 -->
    <TheWelcome />
  </main>
</template>

<!-- 这些是装饰代码 -->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
