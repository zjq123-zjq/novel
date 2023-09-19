<script setup lang="ts">
import { ref } from 'vue'
import navbar from '@/components/navbar.vue'
import { getmusicResourecs } from '@/uilts/api'
const getlist = async () => {
  let res = await getmusicResourecs()
  list.value = res.musicResourecs[index.value]
  reslist.value = res.musicResourecs
}
getlist()
const playing = ref(false);
const fastBack = () => {
  index.value++
  if (index.value >= reslist.value.length) {
    index.value = 0
  }
  getlist()
};
const forward = () => {
  if (index.value <= 0) {
    index.value = reslist.value.length
  }
  index.value--
  getlist()
};
const changeStatus = (status: boolean) => {
  playing.value = status;
};
const ended = () => {
};
const changeProgress = (val: any) => {
};
const list = ref<any>()
const reslist = ref<any>([])
const index = ref(0)
const flag = ref(true)
const show = ref(false)
const showimg = ref(false)
const showmoon = ref(false)
const change = (item: string) => {
  console.log(item);
  list.value = item

}
</script>

<template>
  <div class="detail" :class="showmoon ? 'bg' : ''">
    <van-nav-bar left-text="音乐详情" left-arrow @click-left="$router.back()" :class="showmoon ? 'bg' : ''" />
    <div class="name">
      <p>歌曲：<span>{{ list?.name }}</span></p>
      <p>歌手：<span>{{ list?.singer?.name }}</span></p>
    </div>
    <img :src="list?.cover" alt="">
    <nut-audio :url="list?.src" :loop="false" type="progress" @play="changeStatus" @ended="ended"
      @changeProgress="changeProgress">
      <div class="nut-audio-operate-group">
        <div class="audio-icon" @click="forward">
          <img src="../../icon/上一个.png" alt="">
        </div>
        <nut-audio-operate type="play">
          <van-icon name="play" v-if="!playing"  :class="showmoon ? 'color' : ''"/>
          <van-icon name="pause" v-else  :class="showmoon ? 'color' : ''"/>
        </nut-audio-operate>
        <div class="audio-icon" @click="fastBack">
          <img src="../../icon/下一个.png" alt="">
        </div>
      </div>
    </nut-audio>
    <div class="icon">
      <div @click="flag = !flag">
        <van-icon name="wap-nav" />
        <p>播放列表</p>
      </div>
      <div class="collectimg" @click="showimg = !showimg">
        <img v-if="showimg" src="../../icon/实心.png" alt="">
        <img v-else src="../../icon/心.png" alt="">
        <p>收藏</p>
      </div>
      <div @click="showmoon = !showmoon">
        <img v-if="showmoon" src="../../icon/实月.png" alt="">
        <img v-else src="../../icon/moon.png" alt="">
        <p>夜间模式</p>
      </div>
    </div>
    <div class="bottom" v-if="flag" :class="showmoon ? 'bg' : ''">
      <div id="name">
        <p>歌曲：<span>{{ list?.name }}</span></p>
        <van-icon name="description" @click="show = true" />
      </div>
      <p>歌手：<span>{{ list?.singer?.name }}</span></p>
      <p style="margin-top: 10px;">歌手简介：</p>
      <p class="p">
        {{ list?.singer?.synopsis }}
      </p>
    </div>
    <div class="bottom" v-else :class="showmoon ? 'bg' : ''">
      <h3>列表选择</h3>
      <div class="reslist">
        <div v-for="item in reslist" class="item" @click="change(item)">
          <p>{{ item?.name }}</p>
          <p>{{ item?.singer?.name }}</p>
        </div>
      </div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          {{ list?.singer?.synopsis }}
        </div>
      </div>
    </van-overlay>
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

.name {
  text-align: center;

  p {
    span {
      font-weight: 900;
      font-size: 20px;
    }
  }
}

img {
  width: 80%;
  height: 200px;
  border-radius: 10px;
  margin-left: 10%;
}

.nut-audio {
  padding: 0 20px;

  .nut-audio-operate-group {
    margin: 0 auto;
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  .audio-icon {
    width: 50px;
    height: 50px;
    padding: 3px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .van-icon {
    font-size: 50px;
  }
}

.icon {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 5px;
    }
  }

  .van-icon {
    font-size: 40px;
    color: black !important;
  }

  img {
    width: 40px;
    height: 40px;
  }



}

.bottom {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 160px;
  padding: 0 10px;

  #name {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .van-icon {
      font-size: 40px;
    }
  }

  p {
    span {
      font-weight: 900;
      font-size: 20px;
    }
  }

  .p {
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .reslist {
    overflow-y: scroll;
    height: calc(160px - 20px);

    div {
      height: 50px;
      line-height: 50px;
      display: flex;

      P:nth-child(1) {
        width: 30%;
      }
    }
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 80%;
  height: 70%;
  border-radius: 30px;
  background-color: #fff;
  padding: 10px;
  line-height: 20px;
}

.bg {
  background-color: rgb(76, 86, 98) !important;
  color: white;
}
.color {
    color: black !important;
  }
</style>
