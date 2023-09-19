<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('')
</script>

<template>
  <div class="input">
    <van-field v-model="value1" left-icon="search" placeholder="搜索你想听的节目" />
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .input {
    background-color: rgb(249, 250, 251);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
}
</style>
