import Vue from 'vue';
import cername from '../vue/cername.vue';
import '../../common/js/index.js';
// 导入vue-resource,取数据，$http模块
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#cername',
    render: h => h(cername)
});
