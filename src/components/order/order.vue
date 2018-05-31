<template>
<div>
  <div id="ordertab"> 
      <div class="order-item">待接单</div>
      <div class="order-now">已接单</div>
      <div class="order-item">已完成</div>
  </div>
  <div class="orderlist">
    <unaccept></unaccept><accept></accept><finished></finished>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import accept from './accept.vue';
import finished from './finished.vue';
import unaccept from './unaccept.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    'accept': accept,
    'unaccept': unaccept,
    'finished': finished 
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#ordertab
    width 100%
    height 0.2rem
    line-height 0.2rem
    display flex
    font-family:PingFangSC-Light;
    font-size: 0.14rem;
    color #000000
    margin-top 0.33rem
    div
        flex 1
        text-align center
        &.order-now
            font-family:PingFangSC-Semibold;
            font-weight 900
.orderlist
  width 100%
  padding-bottom 0.6rem
</style>
