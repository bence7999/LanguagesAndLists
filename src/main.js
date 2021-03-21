import Vue from 'vue';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(FlagIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
