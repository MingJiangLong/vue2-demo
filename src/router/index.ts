import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      children: []
    }
  ],
});

//路由守卫
router.beforeEach((to, from, next) => {
  next()
})
export default router
