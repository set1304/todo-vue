import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";
import Home from "@/views/Home";
import Todos from "@/views/Todos";

Vue.config.productionTip = false;

Vue.use(Router);

const router  = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: Todos
    }
  ]

});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
