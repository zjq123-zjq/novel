<script setup lang="ts">
import type { singerTs } from '@/types/index'
defineProps<{
  list:singerTs[]
}>()
</script>

<template>
 <div>
  <div class="item" v-for="item, index in list" :key="index" @click="$router.push('/pages/bookDetail/bookDetail?bookID='+item.id)">
      <div class="left">
        <img :src="item.imgurl" alt="">
      </div>
      <div class="right">
        <h3>{{ item.name }}</h3>
        <span>{{ item.synopsis
        }}</span>
      </div>
    </div>
 </div>
</template>

<style lang="scss" scoped>
.item {
    width: 100%;
    display: flex;
    border-bottom: 0.1px solid gray;
    padding: 20px;

    .left {
      width: 40%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }

    .right {
      width: 60%;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-left: 10px;

      h3 {
        margin-bottom: 10px;
      }

      span {
        font-size: 14px;
        color: gray;

      }
    }
  }
</style>
