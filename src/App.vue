<template>
  <div id="app">
    <screen-tip />
    <Main/>
  </div>
</template>

<script>
import ScreenTip from "./components/screenTip";
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    ScreenTip,
    Main
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
}
#app {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
