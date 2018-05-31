<template>
<div class="tabwrapper">
  <div id="tab">
    <div class="tab-item">
      <router-link to="/needs">
        <span class="icon needs"></span>
        <span class="text needstext">需求发布</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/order">
        <span class="icon order"></span>
        <span class="text ordertext">我的订单</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/user">
        <span class="icon user"></span>
        <span class="text usertext">个人信息</span>
      </router-link>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    };
  },
  components: {
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
</style>
