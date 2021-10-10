<template>
  <div
    class="
      bg-secondary-light-grey
      dark:bg-primary-midnight
      text-secondary-white
      pb-10
      -mt-10
      max-w-screen-2xl
      w-full
      m-auto
    "
  >
    <!-- first part-->
    <div
      class="
        w-80
        md:max-w-80 md:w-full
        h-auto
        mx-auto
        relative
        flex flex-col
        justify-between
        bg-secondary-white
        text-secondary-grey
        dark:bg-primary-very-dark-blue
        rounded-md
        px-7
        py-7
        mb-12
        text-center
      "
    >
      <div
        class="
          w-12
          h-12
          absolute
          -top-6
          rounded-2xl
          bg-primary-violet
          grid
          place-content-center
        "
      >
        <img :src="job.logo" :alt="job.company" />
      </div>

      <h2
        class="text-primary-midnight dark:text-secondary-white font-bold mt-4"
      >
        {{ job.company }}
      </h2>
      <p class="pb-4">{{ companySite }}</p>
      <a
        :href="job.website"
        target="_blank"
        class="
          bg-secondary-light-grey
          text-primary-violet
          font-bold
          text-center
          rounded-md
          py-3
          w-2/4
          m-auto
        "
        >Company Site</a
      >
    </div>

    <!-- second part-->
    <div
      class="
        w-80
        md:max-w-80 md:w-full
        h-auto
        mx-auto
        relative
        flex flex-col
        justify-between
        bg-secondary-white
        text-secondary-grey
        dark:bg-primary-very-dark-blue
        rounded-md
        px-7
        py-7
        my-12
      "
    >
      <div class="py-3">
        <span>{{ job.postedAt }}</span>
        <span class="mx-3 font-bold">&#183;</span>
        <span>{{ job.contract }}</span>
      </div>
      <h2
        class="
          text-primary-midnight
          dark:text-secondary-white
          font-bold
          text-h3
          pb-2
          cursor-pointer
          transition
          duration-300
          ease-in-out
        "
      >
        {{ job.position }}
      </h2>
      <p class="text-primary-violet font-bold text-sm pb-10">
        {{ job.location }}
      </p>
      <a
        :href="job.apply"
        target="_blank"
        class="
          text-secondary-light-grey
          bg-primary-violet
          font-bold
          text-center
          py-3
          mb-8
          w-full
          rounded-md
        "
        >Apply Now</a
      >
      <div>{{ job.description }}</div>
      <h3
        class="font-bold text-primary-midnight dark:text-secondary-white py-10"
      >
        Requirements
      </h3>
      <p class="pb-8">{{ job.requirements.content }}</p>
      <ul class="list-disc ml-3">
        <li v-for="item in job.requirements.items" :key="item">{{ item }}</li>
      </ul>
      <h3
        class="font-bold text-primary-midnight dark:text-secondary-white py-10"
      >
        What You Will Do
      </h3>
      <p class="pb-8">{{ job.role.content }}</p>
      <ol type="1" class="list-decimal ml-3">
        <li v-for="item in job.role.items" :key="item" class="pl-3">
          {{ item }}
        </li>
      </ol>
    </div>

    <!-- third part-->
    <div
      class="
        w-96
        md:max-w-80 md:w-full
        h-auto
        mx-auto
        relative
        flex flex-col
        justify-between
        bg-secondary-white
        text-secondary-grey
        dark:bg-primary-very-dark-blue
        rounded-md
        px-7
        py-7
        my-12
        text-center
      "
    >
      <a
        :href="job.apply"
        target="_blank"
        class="
          text-secondary-light-grey
          bg-primary-violet
          font-bold
          text-center
          py-3
          w-full
          rounded-md
        "
        >Apply Now</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  created() {
    this.job = this.$store.getters.getJob(this.id);
    console.log(this.job);
  },
  computed: {
    companySite() {
      return this.job.company.toLowerCase() + ".com";
    },
  },
};
</script>
