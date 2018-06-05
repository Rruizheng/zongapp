<template>
<div>
  <div class="headercity">
      <a href="javascript:history.go(-1)" class="back"></a>
      <span class="title">城市列表</span>
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

div.headercity
    width 100%
    height 0.6rem
    background rgb(245,166,35)
    text-align center
    font-size 0.18rem
    color #FFF
    position fixed
    span.title
        display inline-block
        height 0.25rem
        line-height 0.25rem
        font-family:PingFangSC-Semibold;
        font-weight 900
        margin-top 0.24rem
    & > a 
        display inline-block
        height 0.24rem
        width 0.24rem
        background-size cover
        background-image url('left.svg')
        position absolute 
        top 0.24rem
        left 0.14rem

</style>
