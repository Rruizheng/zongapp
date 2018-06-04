import Vue from 'vue';
import cerjob from '../vue/cerjob.vue';
import '../../common/js/index.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#cerjob',
    render: h => h(cerjob)
});
