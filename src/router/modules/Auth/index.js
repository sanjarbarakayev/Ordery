const Auth = [
	{
		path: '/login',
		name: 'login',
		meta: {
			layout: 'auth',
		},
		component: () => import('@/views/Auth/Login'),
  },
  {
    path: '/password-recovery',
    name: 'password-recovery',
    meta: {
      layout: 'auth',
    },
    component: () => import('@/views/Auth/PasswordRecovery'),
  },
  {
    path: '/password-reset',
    name: 'password-reset',
    meta: {
      layout: 'auth',
    },
    component: () => import('@/views/Auth/PasswordReset'),
  },
]

export default Auth