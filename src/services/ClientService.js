import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getQuestions() {
    return apiClient.get("/questions");
  },
  getPlans() {
    return apiClient.get("/plans");
  },
  getAdditionalQuestions() {
    return apiClient.get("/additional_questions");
  },
  getPlan(id) {
    return apiClient.get("/plans/" + id);
  },
  getAirports() {
    return apiClient.get("/airports");
  },
  postPlan(plan) {
    return apiClient.post("/plans", plan);
  },
  deletePlan(id) {
    return apiClient.delete("/plans/" + id);
  },
  editPlan(plan) {
    return apiClient.patch("/plans/" + plan.id, plan);
  }
};
