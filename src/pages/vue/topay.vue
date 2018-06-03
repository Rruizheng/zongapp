<template>
  <div id="topay">
    <header1></header1>
    <check></check>
    <div class="total">
      <span class='text'>总价</span>
      <div class="sum"><span class="number">36000</span>元</div>
      <a class="pay" href="topay.html" type="submit">去付款</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header1 from '../../components/header/header1.vue';
import check from '../../components/check/check.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    'header1': header1,
    'check': check
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/index.styl"
body,html
  width 100%
  height 100%
  background #d8d8d8
#topay
  width 100%
  background #d8d8d8
  div.total 
    width 100%
    box-sizing border-box
    height 0.45rem
    border-top-1px(rgba(7,17,27,0.5));
    position absolute
    bottom 0
    line-height 0.45rem
    background #ffffff
    overflow hidden 
    font-size 0.14rem
    font-family:PingFangSC-Regular;  
    span.text
        display inline-block
        color:#9b9b9b;
        padding-left 0.3rem
        width 33%
    div.sum
        display inline-block
        font-size:0.14rem;
        color:#9b9b9b;
        span.number 
            font-family:PingFangSC-Semibold;
            font-size 0.18rem
            color #f5a623
            padding-right 0.03rem
            vertical-align bottom
    a.pay
        width 1.02rem
        height 0.45rem
        padding 0
        display inline-block
        background-image:linear-gradient(90deg, #f5a623 0%, #f76b1c 100%);
        border none
        color #FFF
        text-align center
        float right
</style>
