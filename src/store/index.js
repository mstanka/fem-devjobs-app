import { createStore } from "vuex";
import jobsData from "../data.json";

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      theme: "",
      jobs: jobsData,
      filteredJobs: jobsData,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
