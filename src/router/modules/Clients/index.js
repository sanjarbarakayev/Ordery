const Clients = [
  {
    path: '/todays-clients',
    name: 'todays-clients',
    mate: {
      layout: 'clients',
    },
    component: () => import('@/views/Clients/TodaysClients')
  },
  {
    path: '/all-clients',
    name: 'all-clients',
    meta: {
      layout: 'clients',
    },
    component: () => import('@/views/Clients/AllClients')
  },
  {
    path: '/old-clients',
    name: 'old-clients',
    meta: {
      layout: 'clients',
    },
    component: () => import('@/views/Clients/OldClients')
  },
]

export default Clients