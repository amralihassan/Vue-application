import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// include bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/main.scss';
import 'normalize.css';
// global filter
import './filter'; // external file vue filter created by me

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
