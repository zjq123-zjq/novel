<script setup lang="ts">
import Input from '../../components/Input.vue'
import { ref } from 'vue'
const list = ref(JSON.parse(localStorage.getItem('collectlist') as string) || [])
const active = ref('')
const showBottom = ref(false)
const Id = ref()
const chengeshow = (id?: string) => {
  showBottom.value = true
  let i = list.value.findIndex((item: any) => item.id == id)
  Id.value = i
}
const del = () => {
  list.value.splice(Id.value, 1)
  showBottom.value = false
  localStorage.setItem('collectlist', JSON.stringify(list.value))
}
</script>
<template>
  <div>
    <Input />
    <van-tabs v-model:active="active">
      <van-tab title="我的收藏">
        <div v-for="item in list" class="list">
          <div class="left">
            <img :src="item.imgurl" alt="">
          </div>
          <div class="right">
            <h3>{{ item.name }}</h3>
            <p class="synopsis">{{ item.synopsis }}</p>
            <div class="dian" @click="chengeshow(item.id)">
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="收听历史"></van-tab>
    </van-tabs>
    <div class="bottom" v-if="showBottom">
      <div class="icon" @click="del"> <van-icon name="star-o" />
        取消收藏</div>
      <div class="btn" @click="showBottom = false">
        取消
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep() {

  .van-tab__text {
    font-size: 20px;
  }

  .van-tabs__line {
    width: 40px;
    height: 4px;
    background-color: rgb(251, 95, 57);
  }
}

.list {
  display: flex;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;

  .left {
    width: 35%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 130px;
      border-radius: 10px;
    }
  }

  .right {
    width: 65%;
    padding: 10px;
    position: relative;

    .synopsis {
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .dian {
      position: absolute;
      right: 10px;

      p {
        width: 7px;
        height: 7px;
        background-color: black;
        border-radius: 50%;
        margin-top: 3px;
      }
    }
  }
}

.bottom {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  .icon {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 63px;
    background-color: white;
    height: 56px;
    line-height: 56px;
    padding-left: 20px;

    .van-icon {
      color: red;
      font-size: 20px;
      margin-right: 15px;
    }
  }

  .btn {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    background-color: white;
    text-align: center;
    height: 62px;
    line-height: 62px;
    font-size: 21px;
    border-top: 8px solid rgb(218, 224, 229);
  }
}
</style>
