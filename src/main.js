import Vue from 'vue'
import App from './App.vue'
import "../node_modules/vuetify/dist/vuetify.min.css";
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
