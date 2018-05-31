<template>
  <div id="app">
    <!-- 路由外链 -->
    <router-view></router-view>
     <!-- 底部导航 -->
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
</style>
