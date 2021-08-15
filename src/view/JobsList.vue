<template>
  <div
    class="
      bg-secondary-light-grey
      dark:bg-primary-midnight
      h-screen
      text-secondary-white
    "
  >
    <card-job></card-job>
  </div>
</template>

<script>
import CardJob from '../components/CardJob.vue';

export default {
  components: {
    CardJob,
  },
};
</script>
