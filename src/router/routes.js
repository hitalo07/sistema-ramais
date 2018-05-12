
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  {
    path: '/ramais',
    component: () => import('layouts/ramal'),
    children: [
      { path: '', component: () => import('pages/ramal/List') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
