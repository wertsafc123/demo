<template>
  <div class="rules" v-if="showRules">
    <div class="rules-close" @click="close"></div>
    <div class="rules-container">
      <div class="rules-inner" v-html="rulesHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rules",
  props: {
    rulesHTML: {
      type: String,
      required: true
    },
    showRules: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    rulesDecode() {
      return this.HTMLDecode(this.rulesHTML);
    }
  },
  methods: {
    close() {
      this.$emit("update:showRules", false);
    },
    HTMLDecode(text) {
      let div = document.createElement("div");
      div.innerHTML = text;
      const output = div.innerText || div.textContent;
      div = null;
      return output;
    }
  }
};
</script>

<style lang="scss" scoped>
.rules {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1280px;
  height: 720px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;

  .rules-close {
    position: fixed;
    left: 1056px;
    top: 160px;
    width: 28px;
    height: 29px;
    background: url("./images/icon-close-rules.png");
    background-size: contain;
    background-repeat: no-repeat;
  }

  .rules-container {
    position: fixed;
    left: 230px;
    top: 170px;
    width: 814px;
    height: 392px;
    background: url("./images/bg-rules.png");
    background-size: contain;
    background-repeat: no-repeat;
    overflow: auto;

    .rules-inner {
      /*background: #ff1d5e;*/
      position: absolute;
      left: 100px;
      top: 100px;
      width: 650px;
      height: 254px;
      line-height: 50px;
      font-size: 24px;
      color: #884022;
      text-align: left;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}
</style>
