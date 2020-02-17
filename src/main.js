import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import VueFuse from "vue-fuse";

require("./assets/main.sass");
Vue.config.productionTip = false;
Vue.use(VueFuse);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
