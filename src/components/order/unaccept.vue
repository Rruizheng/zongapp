<template>
  <div class="unaccept">
    <div class="unaccept-item border-1px" v-if="orderlist" v-for="(order, index) in orderlist" :key="index">
      <div class="type">
        <h1>无人机飞防</h1>
        <span>服务类型</span>
      </div>
      <div class="address">
        <div class="left">
          <div><span class="icon"></span><h1>{{order.cityName}}</h1></div>
          <span>{{order.recAdd}}</span>
        </div>
        <div class="right">
          <h4>单号</h4>
          <span>{{order.id}}</span>
        </div>
      </div>
      <div class="time">
        <div class="date">
          <h1>{{datelist[index].det}}天后</h1>
          <span>{{datelist[index].y}}年{{datelist[index].m}}月{{datelist[index].d}}日</span>
        </div>
        <div class="right">
          <div class="scale">
            <h4>面积</h4>
            <span>{{order.acreageDou}}亩</span>
          </div>
          <div class="price">
            <h4>单价</h4>
            <span>{{order.priceDou}}元</span>
          </div>
        </div>
      </div>
      <div class="btng">
        <div><button class="cancle" @click="cancel()">取消订单</button></div>
        <div><a href="change.html"><button class="change">修改订单</button></a></div>
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
      datelist: [],
      baseInfo: {
        userId: '42493337940262912',
        state: 'init',                                             
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
    getdate(list) {
      for (var i in list) {
        var timestamp = list[i].startTime;
        var date = new Date(timestamp);
        var now = new Date();
        var day = {
          y: date.getFullYear(),
          m: ((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)),
          d: date.getDate(),
          det: parseInt(((date - now) / (1000 * 60 * 60 * 24)))
        };
        this.datelist.push(day);
      }
      return this.datelist;  
    },
    getOrder() {
         function checkInfo() {
           // 检查是否已经认证了 
         };
        checkInfo();
        var that = this; 
        var paramurl = 'http://' + this.urldata.feiurl + this.urldata.getorder;
        that.$http.post(paramurl, that.sendInfo, {emulateJSON: true}).then(function(response) {
            this.orderlist = response.data.data;
            this.getdate(this.orderlist);
        }, function (error) {
            console.log(error);
        });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/index.styl" 

.unaccept
  width 3.75rem
  display inline-block
.unaccept-item
  width 3.4rem
  height 2.6rem
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
  div.type,div.address,div.time
    margin-left 0.35rem
  div.type
    padding-top 0.15rem
    & > span 
      height 0.2rem 
      line-height 0.2rem
  div.address,div.time
    margin-top 0.20rem
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
  div.btng
    margin-top 0.21rem
    display flex 
    & > div,a 
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
</style>
