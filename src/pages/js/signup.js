import Vue from 'vue';
import signup from '../vue/signup.vue';
import '../../common/js/index.js';
// 导入vue-resource,取数据，$http模块
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#signup',
    render: h => h(signup)
});
