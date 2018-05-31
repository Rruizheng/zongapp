import Vue from 'vue';
import change from '../vue/singup.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#signup',
    render: h => h(change)
});
