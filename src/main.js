import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import i18n from './i18n';

new Vue({
  render: (h) => h(App),
  store,
  router,
  i18n
}).$mount('#app');


