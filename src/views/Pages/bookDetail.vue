<script setup lang="ts">
import navbar from '@/components/navbar.vue';
import type { book } from '@/types';
import { getBookApi, gettestSynopsisApi } from '@/uilts/api'
import { useRoute, type LocationQueryValue } from "vue-router"
const route = useRoute()
const Id = ref(route.query.bookID)
import { ref } from 'vue';
import { showToast } from 'vant';
const list = ref()
const data = ref()
const state = ref()
const initbook = async () => {
  let res = await getBookApi()
  list.value = res.list.find((item: { id: LocationQueryValue | LocationQueryValue[]; }) => item.id == Id.value)
  let testRes = await gettestSynopsisApi()
  data.value = testRes
}
initbook()
const arr: any = ref(JSON.parse(localStorage.getItem('collectlist') as string) || [])
const flag = ref(false)
const change = () => {
  if (!flag.value) {
    flag.value = true
    showToast('已收藏')
    arr.value.push({ ...list.value, status: flag.value })
    localStorage.setItem("collectlist", JSON.stringify(arr.value))
  } else {
    flag.value = false
    showToast('取消收藏成功')
    let i = arr.value.findIndex((item: { id: any; }) => item.id === list.value.id)
    arr.value.splice(i, 1)
  }
}
</script>
<template>
  <div class="detail">
    <navbar text="图书详情"></navbar>
    <div class="top">
      <div class="left">
        <img :src="list?.imgurl" alt="">
      </div>
      <div class="right">
        <h3>{{ list?.name }}</h3>
        <p>作者:{{ list?.author }}</p>
        <div class="btn">
          <span>分享</span>
          <span @click="change">{{ flag ? "已收藏" : "收藏" }}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <nut-tabs v-model="state">
        <nut-tab-pane title="详情">
          <nut-divider>简介</nut-divider>
          <p class="title">
            {{ list?.synopsis }}
          </p>
        </nut-tab-pane>
        <nut-tab-pane title="目录">
          <div v-for="item in data?.chapterCatalog">
            <p class="title over" @click="$router.push('/pages/reading/reading?chapterID=' + item.id)">{{ item.title }}
            </p>
          </div>
        </nut-tab-pane>
      </nut-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 150px;
  background-color: rgb(168, 176, 195);
  display: flex;
  justify-content: space-between;

  .left {
    width: 30%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 110px;
    }
  }

  .right {
    width: 70%;

    h3 {
      margin-top: 10px;
      font-weight: 500;
      font-size: 20px;
    }

    p {
      margin-top: 10px;
    }

    .btn {
      display: flex;
      justify-content: space-between;
      padding: 10px;

      span {
        width: 130px;
        height: 50px;
        border-radius: 5px;
        background-color: #fff;
        font-size: 20px;
        text-align: center;
        line-height: 50px;

      }
    }
  }
}

.bottom {
  .nut-tab-pane {
    overflow-y: scroll;
    height: calc(100vh - 250px);

    .nut-divider {
      width: 100px;
      font-size: 18px;
      margin: 0 auto;
    }

    .title {
      line-height: 35px;
      font-size: 18px;
      margin-top: 10px;
    }

    .over {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 20px;
    }
  }


}
</style>
