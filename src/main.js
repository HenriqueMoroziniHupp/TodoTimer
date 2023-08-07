import Vue from 'vue';
import '@/registerServiceWorker';
import '@/config/globalComponents/index'; // GlobalComponents
import router from './router';
import store from './store';
import App from './App.vue';

// Gtag configuration
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: { id: 'G-E5Z3EZB130' },
  includes: [{
    id: 'G-F07EL6EH3Y'
  }]

});

Vue.config.productionTip = false;

new Vue({
  name: 'AppVue',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
