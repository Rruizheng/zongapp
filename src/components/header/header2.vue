<template>
<div>
  <div class="header2">
      <a href="javascript:history.go(-1)" class="back"></a>
      <span class="title">修改订单</span>
      <span class="sure">确认</span>
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
@import "../../common/stylus/index.styl"

div.header2
    width 100%
    height 0.6rem
    background #FFF
    text-align center
    font-size 0.18rem
    box-shadow  0 0 0.08rem 0 rgba(0,0,0,0.5)
    span.title
        display inline-block
        height 0.25rem
        line-height 0.25rem
        font-family:PingFangSC-Semibold;
        font-weight 900
        margin-top 0.28rem
    & > .back 
        display inline-block
        height 0.24rem
        width 0.14rem
        background-size cover
        bg-image(back)
        position absolute 
        top 0.28rem
        left 0.14rem
    & > .sure 
        display inline-block
        position absolute
        height 0.25rem
        line-height 0.25rem
        top 0.28rem
        right 0.15rem
        font-family:PingFangSC-Semibold;
        font-size: 0.18rem;
        color:#f5a623;
</style>
