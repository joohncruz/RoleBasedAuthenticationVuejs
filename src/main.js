import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes } from './routes.js';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes, 
  mode: 'history'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
