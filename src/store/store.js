import Vue from "vue";
import Vuex from "vuex";
import ClientService from "@/services/ClientService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plans: [],
    plan: {},
    airports: [],
    additional_questions: []
  },
  getters: {
    plans(state) {
      return state.plans;
    },
    plan(state) {
      return state.plan;
    },
    airports(state) {
      return state.airports;
    },
    additional_questions(state) {
      return state.additional_questions;
    }
  },
  mutations: {
    SET_PLANS(state, plans) {
      state.plans = plans;
    },
    SET_PLAN(state, plan) {
      state.plan = plan;
    },
    SET_AIRPORTS(state, airports) {
      state.airports = airports;
    },
    SET_ADDITIONAL_QUESTIONS(state, questions) {
      state.additional_questions = questions;
    },
    ADD_PLAN(state, plan) {
      state.plans.push(plan);
    },
    DELETE_PLAN(state, planId) {
      state.plans = state.plans.filter(plan => planId !== plan.id);
    },
    EDIT_PLAN(state, EditedPlan) {
      state.plans = state.plans.map(plan => {
        if (EditedPlan.id == plan.id) {
          return EditedPlan;
        }
        return plan;
      });
    }
  },
  actions: {
    fetchPlans({ commit }) {
      ClientService.getPlans()
        .then(response => {
          commit("SET_PLANS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    fetchAdditionalQuestions({ commit }) {
      ClientService.getAdditionalQuestions()
        .then(response => {
          commit("SET_ADDITIONAL_QUESTIONS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    fetchPlan({ commit }, id) {
      ClientService.getPlan(id)
        .then(response => {
          commit("SET_PLAN", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    fetchAirports({ commit }) {
      ClientService.getAirports()
        .then(response => {
          commit("SET_AIRPORTS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    createPlan({ commit }, plan) {
      ClientService.postPlan(plan);
      commit("ADD_PLAN", plan);
    },
    deletePlan({ commit }, id) {
      ClientService.deletePlan(id).then(() => {
        commit("DELETE_PLAN", id);
      });
    },
    editPlan({ commit }, plan) {
      ClientService.editPlan(plan).then(response => {
        commit("EDIT_PLAN", response.data);
      });
    }
  }
});
