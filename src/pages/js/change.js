import Vue from 'vue';
import change from '../vue/change.vue';
import '../../common/js/index.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#change',
    render: h => h(change)
});
