import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    { alias: '/', path: '/mv', component: require('./routes/mv.vue') },
    { path: '/lyric', component: require('./routes/lyric.vue') },
    { path: '/song', component: require('./routes/song.vue') }
];

export default function createRouter(){
   
   let vueRouter = new Router({
        mode: 'history',
        routes
   });

   return vueRouter;
}