<template>
  <div class="accept">
    <div class="accept-item border-1px">
        <div class="type">
        <h1>无人机飞防</h1>
        <span>服务类型</span>
      </div>
      <div class="address">
        <i></i>
        <div class="left">
          <div><span class="icon"></span><h1>杭州市</h1></div> 
          <span>西湖区xx路xx号</span>
        </div>
        <div class="right">
          <h4>单号</h4>
          <span>12345678</span>
        </div>
      </div>
      <div class="time">
        <div class="flyman">
          <h1>张飞手</h1>
          <span>19876838899</span>
        </div>
        <div class="right">
          <div class="scale">
            <h4>面积</h4>
            <span>2000亩</span>
          </div>
          <div class="price">
            <h4>单价</h4>
            <span>18元</span>
          </div>
        </div>
      </div>
      <div class="sendinfo">
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
        <div><button class="cancle" @click="cancel()">取消订单</button></div>
        <div><button class="todo">完成服务</button></div>
        <div><button class="ask" @click="ask()">联系客服</button></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import urldata from '../../data/service.js';

export default {
  data() {
    return {
      urldata,
      orderlist: '',
      baseInfo: {
        userId: '42493337940262912',
        state: 'receipted', // 状态init未开始,receipted已接单,ing进行中,completed已完成       "pageNum":0,                                               
        pageNum: 0,  
        pageLength: 10
      }
    };
  },
  mounted: function() {
    this.getOrder();
  },
  computed: {
      sendInfo: function() {
        return JSON.stringify(this.baseInfo);   
      }
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    ask() {
      this.$emit('ask');
    },
    getOrder() {
         function checkInfo() {
           // 检查是否已经认证了 
         };
        checkInfo();
        var that = this; 
        var paramurl = 'http://' + this.urldata.feiurl + this.urldata.getorder;
        that.$http.post(paramurl, that.sendInfo, {emulateJSON: true}).then(function(response) {
            this.orderlist = response.data;
            console.log(response.data); // promise的then成功之后，将response返回的数据data，保存到aboutData数组里
        }, function (error) {
            console.log(error);
        });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/index.styl" 

.accept
  width 3.75rem
  display inline-block
.accept-item
  width 3.4rem
  height 3.13rem
  border-radius 0.04rem
  border-1px(rgba(0,0,0,0,0.5))
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5)
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
  div.type,div.address,div.time,div.sendinfo
    margin-left 0.35rem
  div.type
    padding-top 0.15rem
    & > span 
      height 0.2rem 
      line-height 0.2rem
  div.address,div.time,div.sendinfo
    margin-top 0.16rem
    & > span 
      height 0.2rem 
      line-height 0.2rem
  div.address
    & > div
      display inline-block
    div.right 
      width 1.11rem
      float right
      margin-right 0.31rem
      & > span 
        font-family:PingFangSC-Semibold;
        font-weight 900
    div.left 
      & > div
        & > span.icon
          display inline-block
          width 0.13rem
          height 0.16rem
          line-height 0.28rem
          background-size cover
          margin-left -0.25rem
          bg-image(local)
          vertical-align baseline
        & > h1
          display inline-block
          margin-left 0.1rem
  div.time
    & > div
      display inline-block
    & > .right
      width 1.11rem
      float right 
      margin-right 0.31rem
      & > div
        display inline-block
        &.price
          margin-left 0.2rem
        & > span 
          font-family:PingFangSC-Semibold;
          font-weight 900
  div.sendinfo
    & > div
      display inline-block
    div.sendtime
      & > span 
        font-family:PingFangSC-Semibold;
        font-weight 900
    div.total 
      width 1.11rem
      float right
      margin-right 0.31rem
      & > span 
        font-family:PingFangSC-Semibold;
        font-weight 900
  div.btng
    margin-top 0.21rem
    display flex 
    & > div 
      flex 1
      text-align center
      & > button
        width 0.88rem
        height 0.28rem
        background:#4a4a4a;
        border-radius:0.31rem;
        color #FFF
        font-family:PingFangSC-Regular;
        font-size:0.14rem;
        border none
        &.todo
          background #f5a623;
   
</style>
