export default {
  setMode(state, payload) {
    state.theme = payload;
  },
  setFilteredJobs(state, payload) {
    state.filteredJobs = payload;
  }
};
