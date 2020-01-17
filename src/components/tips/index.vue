<template>
  <div class="tips" v-if="showTips">
    <div class="tips-wrap">
      <div class="close" @click="close"></div>
      <div class="content" :class="{'flex-center':tipsInfo.length<=4}">
        <div v-for="(item, key) in info" class="item" :key="key">
          <img :src="item.goods_img" class="img" />
          <div class="num">{{ item.goods_num }}</div>
          <div class="name">{{ item.goods_name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "tips",
  props: {
    showTips: {
      type: Boolean,
      required: true
    },
    tipsInfo: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    info() {
      return this.tipsInfo.filter(item => {
        return Object.keys(item).length
      })
    },
  },
  methods: {
    close() {
      this.$emit("update:showTips", false);
    },
  }
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
}
.tips {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;

  &-wrap {
    position: absolute;
    left: 300px;
    top: 175px;
    width: 680px;
    height: 368px;
    background-image: url("./images/bg-prize.png");
    background-size: contain;
    background-repeat: no-repeat;

    .close {
      /*background-color: #ff1d5e;*/
      position: absolute;
      left: 234px;
      top: 260px;
      width: 200px;
      height: 75px;
    }

    .content {
      /*background-color: #ff1d5e;*/
      position: absolute;
      left: 20px;
      top: 65px;
      width: 610px;
      height: 140px;
      color: #884022;
      font-size: 34px;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      overflow-scrolling: touch;

      .item {
        position: relative;
        margin-right: 10px;
        display: inline-block;
        width: 138px;
        height: 138px;
        background-image: url("./images/bg-prize-item.png");
        background-size: contain;
        background-repeat: no-repeat;

        .img {
          position: absolute;
          left: 35px;
          top: 8px;
          width: 70px;
          height: 70px;
          /*background: #ff1d5e;*/
        }

        .num {
          position: absolute;
          left: 0;
          top: 75px;
          width: 100%;
          height: 28px;
          line-height: 28px;
          font-size: 20px;
          color: #884022;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          /*background: #ff1d5e;*/
        }

        .name {
          /*background: #ff1d5e;*/
          position: absolute;
          left: 0;
          top: 103px;
          width: 100%;
          height: 28px;
          font-size: 20px;
          color: #884022;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
    }
  }
}
</style>
