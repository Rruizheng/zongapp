<template>
  <div id="check2">
    <div id="checkbox">
        <div class="checkitem">
            <div class="title">服务类型</div>
            <div class="info">无人机飞防</div>
        </div>
        <div class="linebt"></div>
        <div class="checkitem">
            <div class="title">单号</div>
            <div class="info">HZ18983784</div>
        </div>
        <div class="linebt"></div>
        <div class="checkitem">
            <div class="title">地址</div>
            <input type="text" class="info" value="杭州市西湖区**路"/>>
        </div>
        <div class="linebt"></div>
        <div class="checkitem">
            <div class="title">服务者</div>
            <div class="info">张飞手</div>
        </div>
        <div class="linebt"></div>
        <div class="checkitem">
            <div class="title">完成时间</div>
            <input class="info" type="date" value="2018年5月30日"/>>
        </div>
    </div>
    <div id="checkbox">
        <div class="checkitem">
            <div class="title">面积</div>
            <div class="info">2000亩</div>
        </div>
        <div class="linebt"></div>
        <div class="checkitem">
            <div class="title">单价</div>
            <div class="info">18元</div>
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
@import "../../common/stylus/index.styl"

#check2
    font-size 0.14rem
    padding-bottom 0.45rem
    & > div
        display block
.linebt
    width 3.45rem
    height 2px
    line-height 2px
    margin 0 auto
    background rgba(7,17,27,0.1)
#checkbox
    width 3.59rem
    background #fff
    margin 0.08rem auto 0
    .checkitem
        position relative
        height 0.45rem
        line-height 0.45rem
        & > div
            display inline-block
        .title
            margin-left 0.45rem
            height 0.2rem
            line-height 0.2rem
            font-family:PingFangSC-Light;
            font-size:0.14rem;
            color:#000000;
        .info
            display inline-block
            position absolute 
            left 1.45rem
            font-family:PingFangSC-Semibold;
            font-size:0.14rem;
            font-weight 900;
            color:#000000;
        div.info
            color:#9b9b9b;
        input.info
            height 0.25rem
            line-height 0.25rem
            margin-top 0.1rem
</style>
