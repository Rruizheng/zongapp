<template>
  <div id="change">
    <header2></header2>
    <check2></check2>
    <div class="ask" @click="showAsk()">
      联系客服
    </div>
    <ask @hideA="hideAsk()" v-show="showA"></ask>
  </div>
</template>

<script type="text/ecmascript-6">
import header2 from '../../components/header/header2.vue';
import check2 from '../../components/check/check2.vue';
import ask from '../../components/cover/ask.vue';

export default {
  data() {
    return {
      showA: false
    };
  },
  components: {
    'header2': header2,
    'check2': check2,
    'ask': ask
  },
  methods: {
    showAsk() {
      this.showA = true;
    },
    hideAsk() {
      this.showA = false;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
body,html
  width 100%
  background #d8d8d8
  .ask
    width 3.59rem
    height 0.44rem
    line-height 0.44rem
    background #ffffff
    font-family:PingFangSC-Medium;
    font-size:0.14rem;
    color:#000000;
    text-align center
    position absolute 
    bottom 0.15rem
    left 0.08rem
</style>
