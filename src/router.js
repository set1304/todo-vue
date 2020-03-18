import Vue from "vue/types/vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Todos from "@/views/Todos";

Vue.use(Router)

export default new Router({
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

})