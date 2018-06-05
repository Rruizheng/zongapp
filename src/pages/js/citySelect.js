// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import citySelect from '../vue/citySelect.vue';
import '../../common/js/index.js';

import 'common/stylus/index.styl';

// 导入vue-resource,取数据，$http模块
import VueResource from 'vue-resource';
// 使用路由,全局注册
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#citySelect',
    render: h => h(citySelect)
});
