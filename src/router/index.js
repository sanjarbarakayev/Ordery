import Vue from 'vue';
import VueRouter from 'vue-router';
// modules
import Clients from './modules/Clients';
import Auth from './modules/Auth';
import Settings from './modules/Settings';


Vue.use(VueRouter);


const routes = [
	{
		path: '/',
		meta: {
			layout: 'clients',
		},
		component: () => import('@/views/Home'),
	},
	{
		path: '/help',
		meta: {
			layout: 'settings',
		},
		component: () => import('@/views/Settings/Help'),
	},

	...Clients,
	...Auth,
	...Settings,
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
