<template>
  <div id="app">
     <!-- 底部导航 -->
     <router-view></router-view>
     <v-nav></v-nav>
  </div>
</template>

<script>
import nav from './components/nav/nav.vue';

export default {
  components: {
    'v-nav': nav
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
v-nav
  position absolute
  bottom 0
</style>
