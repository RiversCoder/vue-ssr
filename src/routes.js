import Vue from 'vue'
import Router from 'vue-router'

Vue.use(router);

const routes = [
    { path: '/home', component: require('./routes/home.vue') },
    { path: '/lyric', component: require('./routes/lyric.vue') },
    { path: '/song', component: require('./routes/song.vue') }
];

export default function createRouter(){
   
   let vueRouter = new Router({
        routes
   });

   return vueRouter;
}