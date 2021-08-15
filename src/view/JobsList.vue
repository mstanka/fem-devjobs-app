<template>
  <div
    class="
      bg-secondary-light-grey
      dark:bg-primary-midnight
      text-secondary-white
      py-10      
    "
  >
    <card-job-list :jobs="currentJobs"></card-job-list>
  </div>
</template>

<script>
import CardJobList from '../components/CardJobList.vue';

export default {
  components: {
    CardJobList,
  },
  computed: {
    currentJobs() {
      return this.$store.getters.getJobs;
    },
  },
};
</script>
