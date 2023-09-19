<script setup lang="ts">
</script>
<template>
  <div class="mine">
    <div class="top">
      <div class="left">
        <div class="img"><img src="../../assets/user.jpg" alt=""></div>
        <span>麦3</span>
      </div>
      <div class="right">
        <p><van-icon name="service-o" />我的客服</p>
      </div>
    </div>
    <div class="box">
      <van-cell title="签到" is-link />
      <van-cell title="设置" is-link />
      <van-cell title="意见反顾" is-link />
      <van-cell title="切换账号" is-link />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .left {
      display: flex;
      align-items: center;

      .img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      span {
        display: block;
        font-size: 20px;
        margin-left: 10px;
      }
    }

    .right {
      p {
        padding: 5px;
        border-radius: 20px;
        background-color: rgb(233, 233, 233);

        .van-icon {
          margin-right: 5px;
        }
      }
    }
  }

}

.box {
  margin-top: 20px;

  .van-cell {
    border-bottom: 5px solid rgb(232, 232, 232);
    font-size: 18px;
    color: gray;
  }
}
</style>
