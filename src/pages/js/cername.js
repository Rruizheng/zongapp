import Vue from 'vue';
import cername from '../vue/cername.vue';
import '../../common/js/index.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#cername',
    render: h => h(cername)
});
