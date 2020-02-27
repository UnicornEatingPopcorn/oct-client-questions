import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import VueFuse from "vue-fuse";
// import firebase from "@/services/FirebaseService"

require("./assets/main.sass");
Vue.config.productionTip = false;
Vue.use(VueFuse);

// let vue = null
// firebase.auth().onAuthStateChanged(async user => {
//   await store.dispatch("user/setUser", user)
//
//   if (!vue) {
//     vue = new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount("#app")
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
