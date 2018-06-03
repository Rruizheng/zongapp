import Vue from 'vue';
import signup from '../vue/signup.vue';
import '../../common/js/index.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#signup',
    render: h => h(signup)
});
