<script setup lang="ts">
import Input from '@/components/Input.vue';
import { ref } from 'vue'
const list = [
  {
    "title": "有声书",
    "book": [
      {
        "name": "言情"
      },
      {
        "name": "嫌疑"
      },
      {
        "name": "都市"
      },
      {
        "name": "幻想"
      },
      {
        "name": "武侠"
      },
      {
        "name": "历史"
      }
    ]
  },
  {
    "title": "畅销书",
    "book": [
      {
        "name": "社科"
      },
      {
        "name": "经营"
      },
      {
        "name": "文学"
      },
      {
        "name": "励志"
      },
      {
        "name": "名著"
      },
      {
        "name": "生活"
      }
    ]
  },
  {
    "title": "儿童",
    "book": [
      {
        "name": "故事"
      },
      {
        "name": "儿童"
      },
      {
        "name": "动画"
      },
      {
        "name": "科普"
      },
      {
        "name": "名著"
      },
      {
        "name": "国学"
      }
    ]
  },
  {
    "title": "相声评书",
    "book": [
      {
        "name": "单田芳"
      },
      {
        "name": "郭德纲"
      },
      {
        "name": "热门相声"
      },
      {
        "name": "单口相声"
      },
      {
        "name": "名家评书"
      },
      {
        "name": "新悦笑将"
      }
    ]
  },
  {
    "title": "情感生活",
    "book": [
      {
        "name": "美味故事"
      },
      {
        "name": "伴你入眠"
      },
      {
        "name": "我要恋爱"
      },
      {
        "name": "两性婚姻"
      },
      {
        "name": "心灵探秘"
      },
      {
        "name": "情商修炼"
      }
    ]
  },
  {
    "title": "人文",
    "book": [
      {
        "name": "经典名著"
      },
      {
        "name": "佛学心灵"
      },
      {
        "name": "读书会"
      },
      {
        "name": "诗词歌赋"
      },
      {
        "name": "纪实档案"
      },
      {
        "name": "名家讲座"
      }
    ]
  },
  {
    "title": "历史",
    "book": [
      {
        "name": "百家讲坛"
      },
      {
        "name": "中国史"
      },
      {
        "name": "世界史"
      },
      {
        "name": "名人传"
      },
      {
        "name": "侃野史"
      },
      {
        "name": "春秋战国"
      }
    ]
  },
  {
    "title": "国学书院",
    "book": [
      {
        "name": "经典"
      },
      {
        "name": "百家讲坛"
      },
      {
        "name": "国史"
      },
      {
        "name": "诗文"
      },
      {
        "name": "诸子百家"
      },
      {
        "name": "佛道"
      }
    ]
  },
  {
    "title": "音乐",
    "book": [
      {
        "name": "纯音乐"
      },
      {
        "name": "老歌"
      },
      {
        "name": "翻唱"
      },
      {
        "name": "影视"
      },
      {
        "name": "欧美"
      },
      {
        "name": "古风"
      }
    ]
  },
  {
    "title": "英语",
    "book": [
      {
        "name": "口语"
      },
      {
        "name": "教材"
      },
      {
        "name": "考试"
      },
      {
        "name": "少儿"
      },
      {
        "name": "词汇"
      },
      {
        "name": "职场"
      }
    ]
  },
  {
    "title": "教育培训",
    "book": [
      {
        "name": "名人演讲"
      },
      {
        "name": "职业技能"
      },
      {
        "name": "人际沟通"
      },
      {
        "name": "心理调节"
      },
      {
        "name": "家庭教育"
      },
      {
        "name": "高效学习"
      }
    ]
  },
  {
    "title": "健康养身",
    "book": [
      {
        "name": "黄帝内径"
      },
      {
        "name": "吃出健康"
      },
      {
        "name": "我要减肥"
      },
      {
        "name": "十月妈咪"
      },
      {
        "name": "两性奥秘"
      },
      {
        "name": "运动健身"
      }
    ]
  },
  {
    "title": "广播剧",
    "book": [
      {
        "name": "现代言情"
      },
      {
        "name": "古代言情"
      },
      {
        "name": "全年龄"
      },
      {
        "name": "剧情歌"
      },
      {
        "name": "cv访谈与活动"
      },
      {
        "name": "心灵早操"
      }
    ]
  },
  {
    "title": "戏曲",
    "book": [
      {
        "name": "戏曲大全"
      },
      {
        "name": "华美京剧"
      },
      {
        "name": "温婉越剧"
      },
      {
        "name": "明快黄梅"
      },
      {
        "name": "多彩泸剧"
      },
      {
        "name": "典雅昆剧"
      }
    ]
  }
]

const init = () => {

}
init()
</script>

<template>
  <div class="sort">
    <Input class="inp" />
    <div class="list">
      <div class="leftbar">
        <div v-for="item in list">
          <p>{{ item.title }}</p>
        </div>

      </div>
      <div class="right">
        <div v-for="item in list" class="item">
          <h2> {{ item.title }} <van-icon name="upgrade" /></h2>
          <div class="ele">
            <div v-for="ele in item.book">
              {{ ele.name }}
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.sort {
  background-color: rgb(240, 243, 248);
}

.inp {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.list {
  display: flex;
  margin-top: 50px;

  .leftbar {
    width: 20%;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    color: gray;

    p {
      height: 84px;
      line-height: 84px;
      padding-left: 10px;
    }
  }

  .right {
    width: 80%;
    height: calc(100vh - 50px);
    overflow-y: scroll;

    .item {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 30px;

      h2 {
        width: 100%;
        text-align: center;
        font-size: 23px;
        font-weight: 500;
        margin-bottom: 10px;

        .van-icon {
          transform: rotate(90deg);
        }
      }

      .ele {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        div {
          display: block;
          width: 33.3333%;
          background-color: white;
          text-align: center;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }
}
</style>
