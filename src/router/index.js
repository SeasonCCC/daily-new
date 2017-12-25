import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import FrontEnd from '@/components/info-list/FrontEnd'
import Sports from '@/components/info-list/Sports'
import Car from '@/components/info-list/Car'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                default: Main,
                footer: Footer,
                header: Header
            },
            children: [
                {path:'/', component: FrontEnd},
                {path:'/sports', component: Sports},
                {path:'/car', component: Car},
            ]
        }	
    ]
})
