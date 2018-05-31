<template>
  <div id="user">
      <div class="photo"></div>
      <div class="name">高先生</div>
      <div class="phone">18878772877</div>
      <div class="linebt"></div>
      <div class="check">
          <div class="title">实名认证</div>
          <div class="goto">
              <span class="text">去认证</span><span class="icon"></span>
          </div>
      </div>
      <div class="linebt"></div>
      <div class="check">
          <div class="title">土地认证</div>
          <div class="goto">
              <span class="text">去认证</span><span class="icon"></span>
          </div>
      </div>
      <div class="linebt"></div>
      <div class="check">
          <div class="title">职业认证</div>
          <div class="goto">
              <span class="text">去认证</span><span class="icon"></span>
          </div>
      </div>
      <div class="linebt"></div>
      <div class="shanchang">
          <div class="text">擅长种植作物</div>
          <div class="type"><span>小麦</span></div>
          <div class="type"><span>小麦</span></div>
          <div class="type"><span>小麦</span></div>
          <div class="type"><span>小麦</span></div>
          <div class="more"><span>添加更多</span></div>
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

#user
    font-size 0.14rem
    padding-bottom 0.45rem
    & > div
        display block
.linebt
    width 3.17rem
    height 2px
    line-height 2px
    margin 0 auto
    background rgba(7,17,27,0.1)
.photo 
    background:#d8d8d8;
    border:1px solid #979797;
    width:0.59rem;
    height:0.59rem;
    border-radius:100%;
    margin 0.3rem auto 0.09rem
.name
    width 0.42rem
    height 0.2rem
    line-height 0.2rem
.name,.phone
    font-family:PingFangSC-Regular;
    font-size: 0.14rem;
    color:#4a4a4a;
    letter-spacing:0;
    text-align:center;
    margin 0 auto
.phone
    height 0.2rem
    line-height 0.2rem
    margin 0.05rem auto 0.1rem
.check
    width 100%
    height 0.55rem
    color:#000000;
    letter-spacing:0;
    padding 0
    & > div
        display inline-block
        height 0.2rem
        line-height 0.2rem
        margin-top 0.175rem
        font-family:PingFangSC-Semibold;
        font-size: 0.14rem;
        font-weight 900
        span
            display inline-block
            font-family:PingFangSC-Semibold;
            font-size: 0.14rem;
            font-weight 900
    div.title
        margin-left 1.6rem
    div.goto
        span.text
            margin-left 0.67rem
        span.icon
            width 0.1rem
            height 0.19rem
            margin-left 0.09rem
            background-size cover
            bg-image(right)
            vertical-align top 
div.shanchang  
    & > div
        display inline-block
    div.text
        display block
        height 0.2rem
        line-height 0.2rem
        font-family:PingFangSC-Semibold;
        font-size: 0.14rem;
        font-weight 900
        text-align center
        margin 0.24rem auto 0.17rem
    div.type,div.more
        margin-left 0.3rem
        margin-bottom 0.1rem
        & > span
            display inline-block
            width 0.85rem
            height 0.28rem
            line-height 0.28rem
            text-align center
            border-radius:0.31rem;
            color #FFF
            font-family:PingFangSC-Regular;
            font-size:0.14rem;
            border none
            background:#4a4a4a;
    div.type
        & > span
            background #f5a623
</style>
