import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import firebase from "@/services/FirebaseService";

require("./assets/main.sass");
Vue.config.productionTip = false;

let vue = null;
firebase.auth().onAuthStateChanged(async user => {
  // await store.dispatch("user/setUser", user)
  console.log("user:", user);

  if (!vue) {
    vue = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
