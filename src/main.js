// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import 'common/stylus/index.styl';
import 'common/js/index.js';
// 然后引入vue-router
import VueRouter from 'vue-router';
import needs from 'components/needs/needs';
import order from 'components/order/order';
import user from 'components/user/user';

// 导入vue-resource,取数据，$http模块
import VueResource from 'vue-resource';
// 使用路由,全局注册
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/needs', component: needs },
    { path: '/order', component: order },
    { path: '/user', component: user }
  ]
});

router.push('/goods');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
