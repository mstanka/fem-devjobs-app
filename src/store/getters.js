export default {
  getJobs: (state) => {
    return state.jobs;
  },
  getJob: (state) => (id) => {
    return state.jobs.find((job) => job.id == id);
  },
};
