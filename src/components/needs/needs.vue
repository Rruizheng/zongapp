<template>
  <div id="needs">
    <div class="needswrapper">
        <div class="header">
            <h1>服务需求发布</h1>
            <div>无人机飞防</div>
        </div> 
        <div class="infowrapper">
        <form  @submit="sendInfo()" >
            <div class="info">
                <div class="info-item">
                    <span class="tb-title">服务时间</span>
                    <input type="date" value="2018年4月30日" required="required" class="dateBox" v-model='date'>
                </div>
                <div class="linebt"></div>
                <div class="info-item">
                    <span class="tb-title">城市</span>
                    <a href="citySelect.html" class="city">{{cityName}}</a>
                </div>
                <div class="linebt"></div>
                <div class="info-item">
                    <span class="tb-title">具体地址</span>
                    <input type="text" placeholder="详细地址" v-model='baseInfo.recAdd' required>
                </div>
                <div class="linebt"></div>
                <div class="info-item">
                    <span class="tb-title">联系人&nbsp;</span>
                    <input type="text" placeholder="输入您的姓名" v-model='username' required>
                </div>
                <div class="linebt"></div>
                <div class="info-item">
                    <span class="tb-title">联系手机</span>
                    <input type="number" placeholder="请输入您的手机号" v-model='phone' required>
                </div>
            </div>
            <div class="add">
                <div class="add-item">
                    <span class="tb-title">面积估算</span>
                    <input type="text" placeholder="如200(亩)" v-model='baseInfo.acreageDou' required>
                </div>
                <div class="linebt"></div>
                <div class="add-item">
                    <span class="tb-title">每亩价格</span>
                    <input type="number" placeholder="最低16元，建议18元" v-model='baseInfo.priceDou' required>
                </div>
                <div class="linebt"></div>
            </div>
            <div class="certified">
                <div class="certified-item">
                    <span class="tb-title">认证情况</span>
                </div>
                <div class="linebt"></div>
                <div class="certified-item">
                    <span class="tb-title">实名认证</span>
                    <a class="goto" href="cername.html">
                        <span class="text" v-show="!iscer1">去认证</span><span class="icon" v-show="!iscer1"></span>
                        <span class="text done" v-show="iscer1">已认证</span>
                    </a>
                </div>
                <div class="linebt"></div>
                <div class="certified-item">
                    <span class="tb-title">土地认证</span>
                    <a class="goto" href="cername.html">
                        <span class="text" v-show="!iscer2">去认证</span><span class="icon" v-show="!iscer2"></span>
                        <span class="text done" v-show="iscer2">已认证</span>
                    </a>
                </div>
                <div class="linebt"></div>
                <div class="certified-item">
                    <span class="tb-title">职业认证</span>
                    <a class="goto" href="cername.html">
                        <span class="text" v-show="!iscer3">去认证</span><span class="icon" v-show="!iscer3"></span>
                        <span class="text done" v-show="iscer3">已认证</span>
                    </a>
                </div>
            </div>
            <input type="submit" value="提交订单" class="submitorder" >
            <div class="total">
                <span class='text'>定金</span>
                <div class="sum"><span class="sum">2000</span>元</div>
                <a class="pay" href="topay.html" type="submit">去付款</a>
            </div>
        </form>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import citySelect from '../citySelect/citySelect.vue';
import urldata from '../../data/service.js';

export default {
  data() {
    return {
        cityName: '城市选择',
        iscer1: true,
        iscer2: false,
        iscer3: false,
        urldata,
        date: '',
        username: '',
        phone: '',
        baseInfo: {
            acreageDou: '', // 面积
            priceDou: '', // 单价 
            cityCode: '', // 城市编码
            recAdd: '', // 详细地址
            userId: '42493337940262912', // 用户id
            startTime: '' // 开始时间
        }
    };
  },
  mounted: function() {
      this.getData();
  },
  components: {
      'citySelect': citySelect
  },
  computed: {
      orderInfo: function() {
        return JSON.stringify(this.baseInfo);   
      }
  },
  watch: {
      date: function(newDate, oldDate) {
          var str = this.date;
          str = str.replace(/-/g, '/');
          var date = new Date(str);
          this.baseInfo.startTime = Number(date);
          window.localStorage.setItem('date', newDate);
          console.log(this.baseInfo.startTime);
      },
      cityName: function(newCity, oldCity) {
          this.baseInfo.cityCode = localStorage.getItem('cityId');
      },
      username: function (val, oldVal) { 
        window.localStorage.setItem('username', this.username);
      },
      phone: function (val, oldVal) { 
        window.localStorage.setItem('phone', val);
      },
      baseInfo: {
        handler: function (val, oldVal) { 
            window.localStorage.setItem('address', val.recAdd);
            window.localStorage.setItem('priceDou', val.priceDou);
            window.localStorage.setItem('acreageDou', val.acreageDou);
        },
        deep: true
      }
  },
  methods: {
     getData() {
       if (localStorage.hasOwnProperty('cityName')) { this.cityName = localStorage.getItem('cityName') };
       if (localStorage.hasOwnProperty('date')) { this.date = localStorage.getItem('date') };
       if (localStorage.hasOwnProperty('address')) { this.baseInfo.recAdd = localStorage.getItem('address') };
       if (localStorage.hasOwnProperty('priceDou')) { this.baseInfo.priceDou = localStorage.getItem('priceDou') };
       if (localStorage.hasOwnProperty('acreageDou')) { this.baseInfo.acreageDou = localStorage.getItem('acreageDou') };
       if (localStorage.hasOwnProperty('username')) { this.username = localStorage.getItem('username') }
       if (localStorage.hasOwnProperty('phone')) { this.phone = localStorage.getItem('phone') }
     },
     // 生成订单
     // 订单数据处理
     test() {
         console.log(this.orderInfo);
     },
     sendInfo() {
         function checkInfo() {
           // 检查是否已经认证了  
         };
        checkInfo();
        var that = this; 
        var paramurl = 'http://' + this.urldata.feiurl + this.urldata.add;
        that.$http.post(paramurl, that.orderInfo, {emulateJSON: true}).then(function(response) {
            console.log(response.data); // promise的then成功之后，将response返回的数据data，保存到aboutData数组里
        }, function (error) {
            console.log(error);
        });
        console.log('111');
        localStorage.clear();
        console.log('122');
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/index.styl"
// 间隔线宽度为2px
.submitorder
   font-size 0.14rem
   height 0.2rem
   line-height 0.2rem
   background orange
   display block
.linebt
    width 95%
    height 2px
    line-height 2px
    margin 0 auto
    background rgba(7,17,27,0.1)
input 
    outline none
#needs
    width 100%
    height 100%
    padding-bottom 0.45rem
    background #fff
    overflow hidden
    .needswrapper
        width 100%
    .header
        height 1.2rem
        width 100%
        background-image linear-gradient(rgba(255,129,2,1), rgba(245,166,35,0.23))
        font-family:PingFangSC-Semibold;
        font-weight 900
        font-size:0.18rem
        text-align center
        h1
            font-size 0.18rem
            line-height 0.25rem
            height 0.25rem
            margin-top 0.27rem
            display inline-block
            color #FFF
        div
            width 3.04rem
            height 0.44rem
            line-height 0.44rem
            margin 0.12rem auto 
            box-shadow 0 0 0.08rem 0 rgba(0,0,0,0.5)
            border-radius 0.04rem
            background #FFF
            color:#4a4a4a;
    div.infowrapper
        background #d8d8d8
        input 
            height 0.24rem
            width 1.5rem
        div.info,div.certified,div.add
            width 100%
            margin 0 auto
            font-size 0.14rem
            background #FFF
            margin-bottom 0.14rem
            font-family:PingFangSC-Regular;
            font-size:0.14rem;
            color:#9b9b9b;
            div.info-item,div.add-item
                height 0.40rem
                line-height 0.40rem
                padding-left 0.3rem
                & > span 
                    width 0.56rem
                    display inline-block
                    margin-right 0.52rem
                & > a.city
                    display inline-block
                    height 0.24rem
                    width 1.5rem
                    color:#000;
                    font-family:PingFangSC-Regular;
                    font-size:0.14rem;
            div.certified-item
                position relative
                height 0.37rem
                line-height 0.37rem
                padding-left 0.3rem
                & > span 
                    display inline-block
                    width 0.56rem
                    height 0.4rem
                    margin-right 0.52rem
                    color:#000000;
                &:first-child > span
                    color #9b9b9b
                a.goto
                    position absolute
                    height 0.37rem
                    line-height 0.37rem
                    width 0.6rem
                    right 0.25rem
                    padding-left 1rem
                    display inline-block
                    span 
                        display inline-block
                        font-family:PingFangSC-Semibold;
                        font-size:0.14rem;
                        font-weight 900
                        color:#000000;
                    span.icon
                        width 0.08rem
                        height 0.16rem
                        line-height 0.16rem
                        margin-left 0.09rem
                        margin-top 0.1rem
                        bg-image(right)
                        background-size cover  
                        vertical-align top
                    span.done
                        color: #f5a623;         
        div.add
            padding-bottom 0.14rem
        div.total 
            width 100%
            box-sizing border-box
            height 0.45rem
            position relative 
            bottom 0
            line-height 0.45rem
            background #ffffff
            overflow hidden 
            font-size 0.14rem
            font-family:PingFangSC-Regular;
            box-shadow 0px -1px 1px rgba(7,17,27,0.1) inset
            span.text
                display inline-block
                color:#9b9b9b;
                padding-left 0.3rem
                width 33%
            div.sum
                display inline-block
                font-size:0.14rem;
                color:#9b9b9b;
                span.sum 
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
input.dateBox
    border none  
         
</style>
