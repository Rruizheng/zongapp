<template>
<div class="tabwrapper">
  <div id="tab" class="border-top-1px">
    <div class="tab-item" v-for="(tab, index) in tabs" :key="index" @click="getNow(index)">
      <router-link :to="'/' + tab.name">
        <span class="icon" :class="pageNow == index ? tab.name +' now' : tab.name"></span>
        <span class="text" :class="pageNow == index ? tab.name +'text now' : tab.name + 'text'">{{tab.text}}</span>
      </router-link>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      pageNow: '0',
      tabs: [
        {name: 'needs', text: '需求发布'},
        {name: 'order', text: '我的订单'},
        {name: 'user', text: '个人中心'}
      ]
    };
  },
  methods: {
    getNow(index) {
      this.pageNow = index;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"

.tabwrapper
  width 100%
  position fixed
  bottom 0
#tab
  width 100%
  height 0.45rem
  box-sizing border-box
  background #FFF
  display flex
  border-top-1px(#979797)
  .tab-item
    flex 1
    height 0.45rem
    font-size 0.1rem
    color #000000
    & > a
      & > span.icon 
        display block
        width 0.2rem
        height 0.2rem
        margin 0.08rem auto 0.03rem
        background-repeat no-repeat
        background-size cover
        &.needs
          bg-image('needs')
        &.user
          bg-image('user')
        &.order
          bg-image('order')     
      & > span.text
        display block
        font-family:PingFangSC-Light;
        height 0.14rem
        color #000000
        text-align center 
      &.active
        & > span.icon
          &.needs
            bg-image('needsnow')
          &.user
            bg-image('usernow')
          &.order
            bg-image('ordernow') 
        & > span.text
          color: #f5a623 
</style>
