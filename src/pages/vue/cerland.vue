<template>
  <div id="cerland">
        <headername></headername>
        <div class="item border-1px">
            <input type="text" placeholder="输入土地使用权人真实姓名" class="border-1px">
        </div>
        <div class="item border-1px" >
            <input type="number" name="idcard"  placeholder="输入土地坐落信息">
        </div>
        <div class="border-1px addpic">
            <input type="file" id="file" accept="image/*" class="addfile" @change="getFile">
            <img :src='landsrc' class="preview" :style="{opacity: landop}"/>
            <p>添加图片</p>
            <p>土地证明</p>
        </div>
        <p class="sure">
            <button>确认</button>
        </p>
  </div>
</template>

<script type="text/ecmascript-6">
import headername from '../../components/header/headerland.vue';

export default {
  data() {
    return {
        landsrc: '',
        landop: 0
    };
  },
  components: {
      'headername': headername
  },
  methods: {
      getFile (e) {
        let _this = this;
        var files = e.target.files[0];
        if (!e || !window.FileReader) return; // 看支持不支持FileReader
        let reader = new FileReader();
        reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
        reader.onloadend = function () {
          _this.landsrc = this.result;
          _this.landop = 1;
        };
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

#cerland
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
            width 100%
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
        position absolute 
        bottom 0.5rem
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
