<script setup lang="ts">
import { getreadListApi } from '@/uilts/api'
import navbar from '@/components/navbar.vue'
import item from '@/components/item.vue'
import type { singerTs } from '@/types/index'
import { ref } from 'vue'
const list = ref<singerTs[]>([])
const get = async () => {
  let res = await getreadListApi()
  console.log(res);
  list.value = res.books
}
get()
</script>

<template>
  <div class="readList">
    <navbar text="榜单"></navbar>
  <item :list="list"></item>
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
  }
}
</style>
