<script setup lang="ts">
import { getreadListApi } from '@/uilts/api'
import type { singerTs } from '@/types/index'
import item from '@/components/item.vue'
import navbar from '@/components/navbar.vue'
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
    <navbar text="音乐"/>
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
