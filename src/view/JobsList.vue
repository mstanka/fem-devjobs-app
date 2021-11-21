<template>
  <div
    class="
      bg-secondary-light-grey
      dark:bg-primary-midnight
      text-secondary-white
      py-10
      max-w-screen-2xl
      w-full
      m-auto
    "
  >
    <job-filter></job-filter>
    <card-job-list :jobs="currentJobs"></card-job-list>
  </div>
</template>

<script>
import CardJobList from "../components/CardJobList.vue";
import JobFilter from "../components/JobFilter.vue";

export default {
  components: {
    CardJobList,
    JobFilter,
  },
  computed: {
    currentJobs() {
      return this.$store.getters.getJobs;
    },
  },
};
</script>
