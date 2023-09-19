<script setup lang="ts">
defineProps<{
  text:string
}>()
</script>

<template>
 <div>
  <van-nav-bar :left-text="text" left-arrow @click-left="$router.back()" :class="text==='图书详情'?'bg':''" />
 </div>
</template>

<style lang="scss" scoped>
:deep() {
  .van-nav-bar__text {
    color: black;
    font-size: 18px;
  }

  .van-icon-arrow-left {
    color: black;
    font-size: 20px;
  }
}

.bg{
  background-color: rgb(168, 176, 195);
}
</style>
