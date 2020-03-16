import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from './components/Home.vue'
import Q3 from './components/Q3.vue'
import Q4 from './components/Q4.vue'


export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/q3',
            name:'q3',
            component:Q3
        },
        {
            path:'/q4',
            name:'q4',
            component:Q4
        },

    ]


})