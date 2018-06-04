import Vue from 'vue';
import cerland from '../vue/cerland.vue';
import '../../common/js/index.js';
import './preview.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#cerland',
    render: h => h(cerland)
});
