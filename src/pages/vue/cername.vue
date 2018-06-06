<template>
  <div id="cername">
        <headername></headername>
        <form  @submit="sendData()">
        <div class="item border-1px">
            <input type="text" placeholder="输入真实姓名" class="border-1px" v-model="baseInfo.name" required>
        </div>
        <div class="item border-1px" >
            <input type="number" name="idcard"  placeholder="输入身份证号" v-model="baseInfo.idNo" required>
        </div>
        <div class="border-1px addpic">
            <input type="file" id="file" accept="image/*" class="addfile" @change="getFile($event,'zheng')" required>
            <img :src='zhengsrc' class="preview" :style="{opacity: zhengop}"/>
            <p>添加图片</p>
            <p>身份证正面</p>
        </div>
        <div class="border-1px addpic">
            <input type="file" id="file" accept="image/*" class="addfile" @change="getFile($event,'fan')" required>
            <img :src='fansrc' class="preview" :style="{opacity: fanop}"/>
            <p>添加图片</p>
            <p>身份证背面</p>
        </div>
        <p class="sure">
            <button type="submit">确认</button>
        </p>
        </form>
  </div>
</template>

<script type="text/ecmascript-6">
import headername from '../../components/header/headername.vue';
import urldata from '../../data/service.js';

export default {
  data() {
    return {
        zhengsrc: '',
        fansrc: '',
        zhengop: 0,
        fanop: 0,
        urldata,
        baseInfo: {
            name: '', // 姓名
            idNo: '', // 身份证号
            idCardCons: '',
            idCardPros: '',
            userId: '41080820974223360'
        }
    };
  },
  components: {
      'headername': headername
  },
  computed: {
      sendInfo: function() {
        return JSON.stringify(this.baseInfo);   
      }
  },
  methods: {
      getFile (e, name) {
        let _this = this;
        var files = e.target.files[0];
        if (!e || !window.FileReader) return; // 看支持不支持FileReader
        let reader = new FileReader();
        reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
        var isrc = name + 'src';
        var iop = name + 'op';
        reader.onloadend = function () {
          _this[isrc] = this.result;
          _this[iop] = 1;
        };
        name === 'zheng' ? (this.baseInfo.idCardCons = window.URL.createObjectURL(files)) : (this.baseInfo.idCardPros = window.URL.createObjectURL(files));
      },
      sendData () {
        var that = this; 
        var paramurl = 'http://' + this.urldata.feiurl + this.urldata.username;
        that.$http.post(paramurl, that.sendInfo, {emulateJSON: true}).then(function(response) {
            console.log(response.data);
        }, function (error) {
            console.log(error);
        });
      }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/index.styl"

.addfile 
    width 100%
    height 100%
    position absolute 
    left 0
    top 0
    opacity 0
    z-index 100
img.preview
    display block
    position absolute 
    width 2rem
    height 1.3rem
    left 0
    top 0
#cername
    font-size 0.14rem
    font-family:PingFangSC-Medium;
    div.item
        width 2.6rem
        height 0.32rem
        line-height 0.32rem
        box-sizing border-box
        margin 0 auto 
        padding-left 0.15rem
        border-1px(rgba(7,17,27,0.5))
        margin-top 0.2rem
        &::after
            border-radius 0.15rem
            @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
                border-radius 0.3rem
        input 
            font-family:PingFangSC-Medium;
            color #000
            display block
            height 0.32rem
            line-height 0.32rem
            background none 
            border none
            outline none
    div.addpic
        width 2rem
        height 1.3rem
        box-sizing border-box
        background rgba(7,17,27,0.1)
        border-1px(rgba(7,17,27,0.3))
        margin: 0.4rem auto
        text-align center
        padding 0.4rem
        p
            font-family:PingFangSC-Medium;
            padding-bottom 0.2rem
    p.sure
        width 100%
        button
            display block 
            font-family:PingFangSC-Medium;
            margin 0 auto 
            width 2rem
            height 0.3rem
            border none 
            background  rgb(245,166,35)
            color #ffffff
            border-radius 0.15rem
</style>
