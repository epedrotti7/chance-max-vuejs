
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/how-works', component: () => import('components/howWorks.vue') }
    ]
  },
  {
    path: '/checkout',
    component: () => import('layouts/checkout.vue'),
    children: [
      { path: '', query: { id: 0 }, component: () => import('pages/checkout.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
