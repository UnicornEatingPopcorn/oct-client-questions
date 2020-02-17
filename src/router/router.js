import Vue from "vue";
import VueRouter from "vue-router";
import PlanCreate from "../views/PlanCreate.vue";
import PlanEdit from "../views/PlanEdit.vue";
import PlanList from "../views/PlanList.vue";
import PlanShow from "../views/PlanShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "plan-create",
    component: PlanCreate
  },
  {
    path: "/plan-edit/:id",
    name: "plan-edit",
    component: PlanEdit,
    props: true
  },
  {
    path: "/plan-list",
    name: "plan-list",
    component: PlanList
  },
  {
    path: "/plan-show/:id",
    name: "plan-show",
    component: PlanShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
