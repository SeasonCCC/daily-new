import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Test from '@/components/Test'

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
                {path:'/', component: FrontEnd, name: 'frontEnd'},
                {path:'/sports', component: Sports, name: 'sports'},
                {path:'/car', component: Car, name: 'car'},
            ]
        },
        {
            path: '/test',
            component: Test
        }
    ]
})
