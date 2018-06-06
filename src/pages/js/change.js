import Vue from 'vue';
import change from '../vue/change.vue';
import '../../common/js/index.js';
// 导入vue-resource,取数据，$http模块
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#change',
    render: h => h(change)
});
