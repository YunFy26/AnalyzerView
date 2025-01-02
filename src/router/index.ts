import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/views/MainLayout.vue'
import Introduction from '@/views/Introduction.vue'
import RouterIntro from '@/views/introductions/RouterIntro.vue'
import Analysis from '@/views/Analysis.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: '/intro'
      },
      {
        path: 'intro',
        component: Introduction,
        children: [
          {
            path: 'router',
            component: RouterIntro
          }
          // 未来可以添加其他子路由，如：
          // {
          //   path: 'bean',
          //   component: BeanIntro
          // }
        ]
      },
      {
        path: 'analysis',
        component: Analysis
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 