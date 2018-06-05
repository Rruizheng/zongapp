<template>
  <div class="citySelect">
    <headercity></headercity>
    <!--内容-->
    <!-- 城市列表 -->
    <div class="wrapper">
        <div class="cityContent">
            <div v-for="(cityList, index) in cityLists" :key="index">
                <div class="cityLetter" :id="cityList.name">{{cityList.name}}</div>
                <div v-for="(city, index) in cityList.cities" class="cityitem" :key="index" @click="getName(city.name)">
                    {{city.name}}
                </div>
            </div>
        </div>
        <!-- 字母列表 -->
        <aside class="letter-aside">
            <ul>
                <li v-for="(cityList, index) in cityLists" :key="index" @click="naver(cityList.name)" :class="{now:(cityList.name == tipString)}">{{cityList.name}} </li>
            </ul>
        </aside>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import headercity from '../../components/header/headercity.vue';
import '../../common/js/bscroll.min.js';
import cityLists from '../../data/city.js';

var cities = [];
var letter = [];

export default {
    // mounted () {
    //     var tip = document.getElementsByClassName('cityContent')[0];
    //     tip.addEventListener('scroll', this.handleScroll);
    // },
  data() {
    return {
        cityLists,      
        cities: cities,
        letter: letter,
        tipString: 'A',
        cityName: ''
    };
  },
  components: {
      'headercity': headercity
  },
  methods: {
    naver: function (id) { // 点击右边字母滚动
        this.tipString = id;
        let obj = document.getElementById(id);
        let oPos = obj.offsetTop;
        var tip = document.getElementsByClassName('cityContent')[0];
        return tip.scrollTo(0, oPos);
    },
    // scrollt: function() {
    //     var content = document.getElementsByClassName('cityContent')[0].getElementsByClassName('cityLetter');
    //     console.log('123');
    //     for (let i in content) {
    //         if (content[i].offsetTop === 0) {
    //             this.tipString = content.id;
    //         }
    //     }
    // },
    getName: function(name) {
        this.cityName = name;
        window.localStorage.setItem('cityName', this.cityName);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/index.styl"

.linebt
    width 80%
    height 2px
    line-height 2px
    margin 0 auto
    background rgba(7,17,27,0.1)
.citySelect
    font-size: 0.14rem
    font-family:PingFangSC-Light;
.wrapper
    width 100%
    overflow hidden
    .cityContent
        width 100%
        box-sizing border-box
        position: fixed;
        height: calc(100% - 0.6rem)
        right: 0;
        top: 0.6rem;
        display inline-block 
        overflow-y  scroll
        overflow-x  hidden
        div
            div
                width 90%
                height 0.4rem
                line-height 0.4rem
                font-size 0.18rem
                padding-left 0.4rem
            div.cityLetter
                width 100%
                height 0.4rem
                line-height 0.4rem
                font-size 0.18rem
                font-family:PingFangSC-Semibold;
                background rgba(7,17,27,0.1)
                color rgba(7,17,27,0.7)
            div.cityitem:hover
                background rgba(7,17,27,0.1)
    .letter-aside
        ul
            position: fixed;
            height: calc(100% - 0.6rem)
            right: 0.1rem;
            top: 0.6rem;
            display flex
            flex-direction: column
            li 
                list-style: none;
                flex 1
                color: #aaa;
                &.now
                    color orange

  .tipAppear {
    animation: appearTip 1 linear 0.5s;
  }

  @keyframes appearTip {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }            
</style>
