<script setup lang="ts">
import { gettestContentApi, gettestSynopsisApi } from '@/uilts/api'
import { ref } from 'vue'
import { useRoute, type LocationQueryValue } from 'vue-router';
const route = useRoute()
const i = ref<any>(route.query.chapterID)
const list = ref()
const data = ref()
const testSynopsis = ref()
const init = async () => {
  let res = await gettestContentApi()
  let resa = await gettestSynopsisApi()
  testSynopsis.value = resa
  list.value = res.content
  data.value = res.content.find((item: { id: string | number }) => item.id == i.value)
}
init()
const visible = ref(false)
const flag = ref(false)
const status = ref(false)
const bgcolor = ref(false)
const show = ref(false)
const bgc = ref('#f8f9fa')
const change = (id: string | number) => {
  i.value = id
  init()
}
const changebgc = (a: string) => {
  bgc.value = a
}
const value = ref(20)
const value1 = ref(50)
const Size = ref('20px')
const lheight = ref('50px')
//字体
const onChange = (value: string) => {
  let sz = value + 1
  Size.value = `${sz}px`
}
//间距
const onChange1 = (value1: string) => {
  let lh = value1 + 1
  lheight.value = `${lh}px`
}
const Show = () => {
  if (bgcolor.value == false && show.value == false) {
    visible.value = !visible.value
  }
  if (bgcolor.value == true) {
    bgcolor.value = false
  }
  if (show.value == true) {
    show.value = false
  }

}
</script>

<template>
  <div :class="flag ? 'bg' : ''" :style="{ 'background-color': bgc }">
    <div v-html="data?.text" class="reading" @click="Show" :style="{ 'font-size': Size, 'line-height': lheight }">
    </div>
    <div class="top" v-if="visible" :class="flag ? 'bg' : ''">
      <van-icon name="arrow-left" style="font-size: 25px;margin-left: 8px;" @click="$router.back()" />
      <p style="font-size:18px;margin-left:10px;width: 100px;">{{ testSynopsis.name }}</p>
      <p style="  display: flex;align-items: center; overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;margin-left:8px;">章节:{{ data.chapter }}</p>
    </div>
    <div class="bottom" v-if="visible" :class="flag ? 'bg' : ''">
      <div @click="status = true, visible = false">
        <img src="../../icon/待办.png" alt="">
        <p>目录</p>
      </div>
      <div @click="flag = !flag">
        <img src="../../icon/眼睛.png" alt="">
        <p>夜间模式</p>
      </div>
      <div @click="show = true, visible = false">
        <img src="../../icon/字体.png" alt="">
        <p>字体</p>
      </div>
      <div @click="bgcolor = true, visible = false">
        <img src="../../icon/地球.png" alt="">
        <p>更多</p>
      </div>
    </div>
    <div class="left" v-if="status" @click="status = false">
      <div style="width: 50%;
    background-color: white;
    height: 100%;" @click.stop>
        <h2>章节选择</h2>
        <div class="leftbar">
          <div v-for="item in list" class="item" :class="item.id == i ? 'bgc' : ''" @click="change(item.id)">
            {{ item.chapter }}
          </div>
        </div>

      </div>
    </div>
    <div class="bgcolor" v-if="bgcolor" :style="{ 'background-color': bgc }">
      <div @click="changebgc('#1e90ff')">
        <span style="background-color: #1e90ff;"></span>
        <p>天蓝</p>
      </div>
      <div @click="changebgc('#d1ccc0')">
        <span style="background-color: #d1ccc0;"></span>
        <p>护眼</p>
      </div>
      <div @click="changebgc('#747d8c')">
        <span style="background-color: #747d8c;"></span>
        <p>淡灰</p>
      </div>
      <div @click="changebgc('#f8f9fa')">
        <span style="background-color: #f8f9fa;"></span>
        <p>早晨</p>
      </div>
      <div @click="changebgc('#4c5662')">
        <span style="background-color: #4c5662;"></span>
        <p>夜间</p>
      </div>
    </div>
    <div class="size" v-if="show">
      <p>字体：<van-slider v-model="value" @change="onChange" /></p>
      <p>间距：<van-slider v-model="value1" @change="onChange1" /></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reading {
  padding: 0 10px;
  line-height: 50px;
  font-size: 22px;
  color: rgb(108, 108, 136);

}

.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  z-index: 999;
  display: flex;
  align-items: center;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0 5px 0 gray;

  .van-text-ellipsis {
    width: 90%;
  }
}

.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 3px;
  box-shadow: 0 0 5px 0 gray;

  div {
    width: 25%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }

    p {
      margin-top: 5px;
    }
  }
}

.left {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  h2 {
    font-weight: 500;
    text-align: center;
    line-height: 50px;
    height: 50px;
  }

  .leftbar {
    height: calc(100vh - 50px);
    overflow-y: scroll;

  }

  .item {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid gray;
  }

  .bgc {
    background-color: rgb(131, 149, 167);
    color: white;
  }
}

.bg {
  background-color: rgb(76, 86, 98) !important;
  color: rgb(193, 203, 205) !important;
}

.bgcolor {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  background-color: white;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      display: block;
      width: 70px;
      height: 45px;
      background-color: #d1ccc0;
      border-radius: 5px;
      border: 0.1px solid gray;
    }
  }
}

.size {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: white;
  z-index: 99999;

  p {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;

    .van-slider {
      width: 75%;
    }
  }
}
</style>
