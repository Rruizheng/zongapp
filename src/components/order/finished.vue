<template>
  <div class="finished">
    <div class="finished-item">
       <div class="item1">
        <div class="type">
          <h1>无人机飞防</h1>
          <span>服务类型</span>
        </div>
        <div class="flyman">
          <h1>张飞手</h1>
          <span>19876838899</span>
        </div>
      </div>
       <div class="item2">
        <div class="sendtime">
          <h4>预约时间</h4>
          <span>2018年5月30号</span>
        </div>
        <div class="total">
          <h4>总价</h4>
          <span>36000元</span>
        </div>
      </div>
      <div class="btng">
          <div><button class="finished">完成订单</button></div>
          <div><button class="topay"></button></div>
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

.finished
  width 3.75rem
  display inline-block
.finished-item
  width 3.4rem
  height 1.74rem
  border-radius 0.04rem
  border-1px(rgba(0,0,0,0,0.5))
  box-shadow 0 0 10px 0 rgba(0,0,0,0.5)
  margin 0.21rem auto 0
  font-size 0.14rem  
  h1
    font-family:PingFangSC-Semibold;
    font-size:0.2rem;
    color:#000000;
    height 0.28rem
    line-height 0.28rem
    font-weight 900
  h4
    font-family:PingFangSC-Light;
    font-size:0.14rem;
    color:#000000;
    height 0.28rem
    line-height 0.28rem
  div.item1,div.item2
    margin-left 0.35rem
  div.item1
    padding-top 0.15rem
    & > span 
      height 0.2rem 
      line-height 0.2rem
  div.item2
    padding-top 0.17rem
    & > span 
      height 0.2rem 
      line-height 0.2rem
  div.item1
    & > div
      display inline-block
    div.flyman 
      width 1.11rem
      float right
      margin-right 0.31rem
  div.item2
    & > div
      display inline-block
      & > span 
        font-family:PingFangSC-Semibold;
        font-weight 900
    div.total
      width 1.11rem
      float right
      margin-right 0.31rem
  div.btng
    margin-top 0.15rem
    display flex 
    & > div 
      display inline-block
      & > button
        position relative
        width 0.88rem
        height 0.28rem
        border-radius:0.31rem;
        color #FFF
        font-family:PingFangSC-Regular;
        font-size:0.14rem;
        border none
        &.finishpay
          color:#f5a623
          background #FFF
          border 1px solid #f5a623
          box-sizing border-box
          &:before
            content '已完成'
            width 0.42rem 
            height 0.2rem
            display inline-block
            position absolute 
            left 0.23rem
            top 0.04rem
        &.topay
          color:#FFF
          background #f5a623
          border 1px solid #f5a623
          box-sizing border-box
          &:before
            content '去付款'
            width 0.42rem 
            height 0.2rem
            display inline-block
            position absolute 
            left 0.23rem
            top 0.04rem
      &:first-child
        margin-left 0.33rem
        & > button 
          background:#4a4a4a;
      &:nth-child(2)
        margin-left 0.75rem
        
</style>
