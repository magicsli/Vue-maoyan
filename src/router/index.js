import Vue from 'vue';
import VueRouter from 'vue-router'

import Movie from 'Pages/Movie'
import Hot from 'Pages/Hot'
import Cinema from 'Pages/Cinema'
import Mine from 'Pages/Mine'
import NotFound from 'Pages/NotFound'

Vue.use( VueRouter )

const routes = [ 
    { 
        path: '/',
        redirect:'/movie' 
    },
    {
        path: '/movie',
        component: Movie,
        redirect: '/movie/n-hot',
        children:[
            {
                path: 'n-hot',
                component: Hot
            },
            {
                path: 'f-hot',
                component: Hot
            }
        ]
    },
    {
        path: '/cinema',
        component: Cinema
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '**',
        component: NotFound
    }
 ]

const router = new VueRouter({
    routes,

})

export default router