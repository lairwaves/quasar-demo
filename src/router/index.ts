import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'article',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: 'article',
          name: 'article',
          meta: {
            title: '文章'
          },
          component: () => import('@/views/ArticleIndex.vue')
        }
      ]
    },
    // 404的頁面
    {
      path: '/:catchAll(.*)*',
      name: '404',
      component: () => import('@/views/ErrorNotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})
router.beforeEach(async (to, from /**, next*/) => {})
export default router
