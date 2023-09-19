<script setup lang="ts">
import Input from '@/components/Input.vue';
import { ref } from 'vue'
import item from '@/components/item.vue';
import type { Swiper, Rebooks, Books } from '../types/index'
import { getApi, getmusicResourecs } from '@/uilts/api'
import { useRouter } from 'vue-router';
import { PlayStart, PlayStop } from '@nutui/icons-vue';
const router = useRouter()
const swiperImagesList = ref<Swiper[]>()
const Rebooks = ref<Rebooks[]>([])
const bookResources = ref<Books[]>([])
const musicList = ref([])
const data = ref()
const index = ref(0)
const getData = () => {
  getApi().then(res => {
    swiperImagesList.value = res.swiperImages
    Rebooks.value = res.Rebooks
    bookResources.value = res.bookResources
  })
  getmusicResourecs().then(musicRes => {
    musicList.value = musicRes.musicResourecs
    data.value = musicList.value[index.value]
  })

}
getData()
const playing = ref(false);
const fastBack = () => {
  index.value++
  if (index.value >= musicList.value.length) {
    index.value = 0
  }
  getData()
};
const forward = () => {
  if (index.value <= 0) {
    index.value = musicList.value.length
  }
  index.value--
  getData()
};
const changeStatus = (status: boolean) => {
  playing.value = status;
};
const ended = () => {
};
const changeProgress = (val: any) => {
};

const routerpush = (item: any) => {
  if (item.name === '西游记') {
    router.push('/pages/bookDetail/bookDetail?bookID=' + 2001)
  }
}
</script>

<template>
  <div class="home">
    <div style="padding:10px;  padding-bottom: 70px;">
      <Input />
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="item, index in swiperImagesList" :key="index">
          <img :src="item?.src" />
        </van-swipe-item>
      </van-swipe>
      <!-- 宫格 -->
      <van-grid>
        <van-grid-item @click="$router.push('/pages/readLIst/readLIst')">
          <van-image src="/src/assets/1.png" />
          <span>看榜单</span>
        </van-grid-item>
        <van-grid-item @click="$router.push('/pages/listenNoval/listenNoval')">
          <van-image src="/src/assets/2.png" />
          <span>听小说</span>
        </van-grid-item>
        <van-grid-item @click="$router.push('/pages/listenMusic/listenMusic')">
          <van-image src="/src/assets/3.png" />
          <span>听音乐</span>
        </van-grid-item>
        <van-grid-item @click="$router.push('/pages/listenKnowledge/listenKnowledge')">
          <van-image src="/src/assets/4.png" />
          <span>听知识</span>
        </van-grid-item>
      </van-grid>
      <van-cell title="猜你喜欢" is-link value="查看推荐" style="margin-top: 10px;" />
      <div class="list">
        <div v-for="item in Rebooks" class="item" @click="routerpush(item)">
          <img :src="item?.src" alt="">
          <p>{{ item?.name }}</p>
        </div>
      </div>
      <div v-for="item, index in bookResources" :key="index" style="margin-top:10px;">
        <van-cell :title="item.headerTitle" is-link value="查看全部" />
        <item :list="item.books"></item>
      </div>
      <div style="height: 100px;"></div>
      <div class="audio" @click="$router.push('/pages/musicDetail/musicDetail')">
        <nut-audio :url="data?.src" :loop="false" type="progress" @play="changeStatus" @ended="ended"
          @changeProgress="changeProgress">
          <div style="display: flex;justify-content: space-between;">
            <div class="left">
              <span>歌手-{{ data?.singer.name }}</span>
              <span style="margin-top: 3px;">歌曲-{{ data?.name }}</span>
            </div>
            <div class="nut-audio-operate-group" @click.stop>
              <div class="audio-icon" @click="forward">
                <img src="../icon/上一个.png" alt="">
              </div>
              <nut-audio-operate type="play">
                <PlayStart v-if="!playing" width="40px" height="40px"></PlayStart>
                <PlayStop v-else width="40px" height="40px"></PlayStop>
              </nut-audio-operate>
              <div class="audio-icon" @click="fastBack">
                <img src="../icon/下一个.png" alt="">
              </div>
            </div>
          </div>
        </nut-audio>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;

  .van-swipe {
    width: 100%;
    margin-top: 10px;

    img {
      width: 100%;
      height: 200px;
    }
  }
}

:deep() {
  .van-cell {
    padding: 10px 0;
    align-items: center;
  }

  .van-cell__title {
    font-size: 20px;
  }

  .van-grid {
    height: 100px;

    .van-grid-item {
      .van-image {
        width: 50px;
        height: 50px;
      }

      span {
        font-weight: 100;
        display: block;
      }
    }
  }

  .nut-audio__time {
    font-size: 18px !important;
    color: gray;
  }
}

.list {
  display: flex;
  justify-content: space-between;

  .item {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    img {
      width: 100%;
    }

    P {
      padding: 0;
      color: gray;
    }
  }
}

.ele {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.audio {
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  left: 10px;
  bottom: 45px;
  background-color: rgba(213, 209, 198, 0.8);
  width: 95%;
  margin: 10px 0;
  z-index: 999;
  border-radius: 10px;
  box-sizing: border-box;
  padding-bottom: 5px;

  span {
    font-weight: 100;
  }

  .nut-audio-operate-group {
    display: flex;
    align-items: center;

    .audio-icon {
      width: 35px;
      height: 35px;
      padding: 3px;
      border-radius: 50%;
      border: 4px solid rgb(72, 77, 83);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }


}

.left {
  span {
    display: block;
  }
}
</style>
