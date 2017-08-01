import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes, authenticationRule } from './routes.js';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes, 
  mode: 'history'
});

router.beforeEach((to, from, next) => authenticationRule(to, from, next))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


