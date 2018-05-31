import Vue from 'vue';
import topay from '../vue/topay.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#topay',
    render: h => h(topay)
});
