import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/main.scss';
import vuetify from './plugins/vuetify';

import ClientsLayout from '@/layouts/ClientsLayout';
import AuthLayout from '@/layouts/AuthLayout';
import SettingsLayout from '@/layouts/SettingsLayout';

Vue.component('clients-layout', ClientsLayout);
Vue.component('auth-layout', AuthLayout);
Vue.component('settings-layout', SettingsLayout);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
