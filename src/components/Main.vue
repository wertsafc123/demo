<template>
  <div class="main">
    <img class="bg" src="../assets/images/bg.png" alt />
  </div>
</template>

<script>
import request from "../util/http";

export default {
  name: "Main",
  components: {
  },
  data: () => ({
  }),
  created() {
  },
  methods: {
    getBasicInfo() {
      request({
        method: "get",
        url: "https://result.eolinker.com/J38I1RC39529ec28169dd9dc2d0331655c435d5d2558c10?uri=ActivityTreeV2/get_basic_info"
      }).then(res => {
        window.console.log(res)
      });
    }
  }
};
</script>

<style lang='scss' scope>
.main {
  display: flex;
  position: absolute;
  overflow-x: hidden;
  .bg {
    width: 100vw;
  }
}
</style>        
