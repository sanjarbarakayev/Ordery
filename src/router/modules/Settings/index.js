const Settings = [
  {
    path: '/change-info',
    name: 'change-info',
    meta: {
      layout: 'settings',
    },
    component: () => import('@/views/Settings/ChangeInfo'),
  },
  {
    path: '/change-phone',
    name: 'change-phone',
    meta: {
      layout: 'settings',
    },
    component: () => import('@/views/Settings/ChangePhone'),
  },
  {
    path: '/change-password',
    name: 'change-password',
    meta: {
      layout: 'settings',
    },
    component: () => import('@/views/Settings/ChangePassword'),
  },
]

export default Settings