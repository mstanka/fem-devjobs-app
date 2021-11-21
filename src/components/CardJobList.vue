<template>
  <ul
    class="
      grid grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      max-w-screen-xl
      md:mx-8
      xl:mx-auto
      gap-x-10
    "
  >
    <card-job
      v-for="job in jobs"
      :key="job.id"
      :id="job.id"
      :company="job.company"
      :logo="job.logo"
      :logoBackground="job.logoBackground"
      :position="job.position"
      :postedAt="job.postedAt"
      :contract="job.contract"
      :location="job.location"
    >
    </card-job>
  </ul>
</template>

<script>
import CardJob from "./CardJob.vue";

export default {
  components: {
    CardJob,
  },
  props: {
    jobs: Object,
  },
};
</script>
