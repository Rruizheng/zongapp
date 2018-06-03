<template>
<div>
  <div id="ordertab"> 
      <div v-for="(tab, index) in tabs" class="order-item" :class="{now: now == index}" :key="index" @click='changeTab(tab, index)'>{{tab.value}}</div>
  </div>
  <div class="orderlist">
    <component :is="tabView" @cancel="showCancel()" @ask="showAsk()"></component>
  </div>
  <ask @hideA="hideAsk()" v-show="showA"></ask>
  <cancel @hideC="hideCancel()" v-show="showC"></cancel>
</div>
</template>

<script type="text/ecmascript-6">
import accept from './accept.vue';
import finished from './finished.vue';
import unaccept from './unaccept.vue';
import ask from '../cover/ask.vue';
import cancel from '../cover/cancel.vue';

export default {
  name: 'order',

  data() {
    return {
      tabView: 'unaccept',
      now: 0,
      tabs: [
        {name: 'unaccept', value: '待接单'}, 
        {name: 'accept', value: '已接单'}, 
        {name: 'finished', value: '已完成'}
      ],
      showC: false,
      showA: false
    };
  },
  components: {
    'accept': accept,
    'unaccept': unaccept,
    'finished': finished,
    'ask': ask,
    'cancel': cancel  
  },
  methods: {
    changeTab(tab, index) {
      this.tabView = tab.name;
      this.now = index;
    },
    showCancel() {
      this.showC = true;
    },
    hideCancel() {
      this.showC = false;
    },
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
#ordertab
    width 100%
    height 0.2rem
    line-height 0.2rem
    display flex
    font-family:PingFangSC-Light;
    font-size: 0.14rem;
    color #000000
    margin-top 0.33rem
    div.order-item
        flex 1
        text-align center
        &.now
            font-family:PingFangSC-Semibold;
            font-weight 900
.orderlist
  width 100%
  padding-bottom 0.6rem
</style>
