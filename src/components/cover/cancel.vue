<template>
  <div id="cancle">
      <div class="box">
          <div class="title">是否取消订单</div>
          <div class="linebt"></div>
          <div class="btn">
            <div class="btnitem">是</div>
            <div class="ybt"></div>
            <div class="btnitem" @click="hide()">否</div>
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
  methods: {
      hide() {
          this.$emit('hideC');
      }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

.linebt
    width 95%
    height 2px
    line-height 2px
    margin 0 auto
    background rgba(7,17,27,0.1)
.ybt
    width 2px
    height 0.4rem
    line-height 0.2rem
    margin 0 auto
    background rgba(7,17,27,0.1)
#cancle
  height 100%
  width 100%
  z-index 100
  position absolute 
  top 0
  left 0
  background rgba(7,17,27,0.5)
  font-family:PingFangSC-Light;
  font-size:0.14rem;
  .box
    position absolute
    width 2rem
    height 1.2rem
    background #FFF
    left calc(50% - 1rem)
    top calc(50% - 0.7rem)
    border-radius 0.1rem
    text-align center
    & > .title
      display inline-block
      margin-top 0.1rem
      height 0.5rem 
      line-height 0.5rem
    & > .btn 
      margin-top 0.1rem
      & > div
        display inline-block
        &.btnitem
          width 0.8rem
          height 0.4rem
          line-height 0.4rem
          vertical-align top 
          text-align center 
</style>
