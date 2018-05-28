<template>
  <div id="tab">
    <div class="tab-item">
      <a >
        <span class="icon needs"></span>
        <span class="text">需求发布</span>
      </a>
    </div>
    <div class="tab-item">
      <a >
        <span class="icon order"></span>
        <span class="text">我的订单</span>
      </a>
    </div>
    <div class="tab-item">
      <a >
        <span class="icon user"></span>
        <span class="text">个人信息</span>
      </a>
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

#tab
  width 100%
  height 0.45rem
  background #FFF
  display flex
  border-1px(#979797)
  .tab-item
    flex 1
    text-align center
    font-size 10px
    color #000000
    & > a
      & > span.icon 
        display block
        width 0.2rem
        height 0.2rem
        margin 5px auto
        margin-bottom 3px
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
</style>
