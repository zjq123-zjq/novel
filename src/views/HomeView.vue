<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
</script>

<template>
  <div>
    <RouterView></RouterView>
    <van-tabbar v-model="active" active-color="#f36e4b" route>
      <van-tabbar-item to="/home">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? '/src/icon/tabber/indexed.png' : '/src/icon/tabber/index.png'" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/pages/sort/sort">
        <span>分类</span>
        <template #icon="props">
          <img :src="props.active ? '/src/icon/tabber/sorted.png' : '/src/icon/tabber/sort.png'" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/pages/collection/collection">
        <span>收藏</span>
        <template #icon="props">
          <img :src="props.active ? '/src/icon/tabber/collectioned.png' : '/src/icon/tabber/collection.png'" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/pages/mine/mine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? '/src/icon/tabber/mined.png' : '/src/icon/tabber/mine.png'" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .van-tabbar {
    background-color: rgb(244, 247, 252);
  }
  .van-tabbar-item__icon {
    width: 24px;
    height: 24px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
