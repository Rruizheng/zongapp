<template>
  <div id="signup">
    <div class="title">手机登陆</div>
    <div class="phone">
       <input type="number" placeholder="手机号"/>
    </div>
    <div class="makeSure">
      <input type="number" placeholder="验证码"/>
      <button class="getNum" v-show="show" @click="getCount">获取验证码</button>
      <button class="count" v-show="!show">重新发送{{count}}</button>
    </div>  
    <div class="sign"><input type="submit" value="确认"></div>
    
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
      count: '',
      show: true,
      timer: null
    };
  },
  methods: {
    getCount: function() {
      const TimeCount = 60;
      if (!this.timer) {
        this.count = TimeCount;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TimeCount) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/index.styl"

body
  width 100%
  height 100%
html
  width 100%
  background-repeat no-repeat
  background-size cover
  bg-image(bg)
  #signup
    width 100%
    height 100%
    font-size 0.14rem
    .title
      display block
      font-family:PingFangSC-Semibold;
      font-size:0.2rem;
      color:#ffffff;
      margin 1.8rem auto 0.2rem
      text-align center
    div.phone,div.makeSure
      display block
      width 2.54rem
      height 0.4rem
      line-height 0.4rem
      margin 0 auto 0.2rem
    div > input 
      display inline-block
      box-sizing border-box
      width 2.54rem
      height 0.4rem
      line-height 0.4rem
      padding-left 0.24rem
      border-radius 0.2rem
      box-shadow 0 0 12px 0 rgba(7,17,27,0.5)
      background #ffffff
      font-family:PingFangSC-Light;
      font-size 0.14rem
      color:#000000;
    div.makeSure
      position relative
      button.getNum
        display inline-block
        width 0.84rem
        height 0.38rem
        line-height 0.38rem
        position absolute
        background:#f76b1c;
        border none
        color #FFF 
        right 0.01rem
        top 0.01rem
        border-radius 0.19rem
        font-size 0.14rem
      button.count
        display inline-block
        width 0.88rem
        height 0.38rem
        line-height 0.38rem
        position absolute
        background: rgba(7,17,27,0.3);
        border none
        color #FFF 
        right 0.01rem
        top 0.01rem
        border-radius 0.19rem
        font-size 0.14rem
    div.sign > input 
      display block
      padding 0
      margin 1.7rem auto 0.2rem
      width 1.88rem
</style>
