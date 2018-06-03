<template>
<div>
  <div class="header1">
      <a class="back" href="/#/needs"></a>
      <span class="title">确认订单</span>
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

div.header1
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
    & > a 
        display inline-block
        height 0.24rem
        width 0.14rem
        background-size cover
        bg-image(back)
        position absolute 
        top 0.28rem
        left 0.14rem

</style>
