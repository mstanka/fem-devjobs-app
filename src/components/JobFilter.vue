<template>
  <div
    class="
      relative
      bg-secondary-white
      dark:bg-primary-very-dark-blue
      text-secondary-white
      rounded-lg
      h-20
      w-4/5
      md:w-11/12
      max-w-screen-xl
      mx-auto
      -mt-16
      flex
      justify-center
      items-center
      z-10
    "
  >
    <!--First part-->
    <div class="flex flex-1 lg:flex-auto items-center lg:max-w-4/5">
      <div class="flex items-center justify-center md:px-6 w-full">
        <svg
          class="
            w-6
            h-6
            text-primary-violet
            fill-current
            hidden
            md:inline-block
          "
        >
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
          />
        </svg>
        <input
          type="text"
          placeholder="Filter by title..."
          v-model.trim="filters.title"
          class="
            p-2
            pl-4
            w-full
            rounded-md
            inline-block
            lg:hidden
            dark:bg-primary-very-dark-blue
            cursor-pointer
          "
        />
        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          v-model.trim="filters.company"
          class="
            p-2
            rounded-md
            hidden
            lg:inline-block
            w-4/5
            dark:bg-primary-very-dark-blue
            cursor-pointer
          "
        />
      </div>
    </div>

    <!--Second part-->
    <div class="flex flex-1 items-center justify-end">
      <button @click="openModal">
        <svg
          class="
            w-7
            h-7
            text-secondary-dark-grey
            dark:text-secondary-white
            fill-current
            md:hidden
            cursor-pointer
          "
        >
          <path
            d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
          />
        </svg>
      </button>
      <div
        class="
          hidden
          md:flex
          flex-1
          items-center
          border-l border-r border-secondary-grey
          dark:border-secondary-dark-grey
          p-6
        "
      >
        <svg class="w-7 h-7 text-primary-violet fill-current">
          <path
            d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
          />
        </svg>
        <input
          type="text"
          placeholder="Filter by location..."
          v-model.trim="filters.location"
          class="p-2 w-full dark:bg-primary-very-dark-blue cursor-pointer"
        />
      </div>
    </div>

    <!--Third part-->
    <div class="flex flex-1 items-center justify-around">
      <div class="hidden md:flex items-center">
        <input
          type="checkbox"
          v-model="filters.isFullTime"
          class="bg-secondary-grey w-4 h-4 p-4 inline-block cursor-pointer"
        />
        <label
          for="checkbox"
          class="
            text-primary-midnight
            dark:text-secondary-white
            font-bold
            ml-3
            xl:hidden
          "
          >Full Time
        </label>
        <label
          for="checkbox"
          class="
            text-primary-midnight
            dark:text-secondary-white
            font-bold
            ml-3
            hidden
            xl:block
          "
          >Full Time Only
        </label>
      </div>

      <div class="bg-primary-violet rounded-md py-3 px-3 mr-1">
        <svg
          class="
            w-6
            h-6
            dark:text-secondary-white
            fill-current
            md:hidden
            cursor-pointer
          "
        >
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
          />
        </svg>
        <button
          type="submit"
          class="hidden md:block font-bold cursor-pointer"
          @click="filterJobs"
        >
          Search
        </button>
      </div>
    </div>
  </div>

  <!--Modal-->
  <div>
    <transition name="modal">
      <job-filter-modal v-if="showModal" @close="closeModal" />
    </transition>
  </div>
</template>

<script>
import JobFilterModal from "./JobFilterModal.vue";

export default {
  components: { JobFilterModal },
  data() {
    return {
      showModal: false,
      filters: {
        title: "",
        company: "",
        location: "",
        isFullTime: false,
      },
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    filterJobs() {
      console.log(this.filters)
      const filteredData = this.currentJobs.filter((job) => {
        for (filter of this.filters) {
          return Object.keys(job).some((key) => job[key].includes(filter));
        }
      });
      console.log(filteredData);

      this.$store.dispatch("filterJobs", filteredData);
    },
  },
  computed: {
    currentJobs() {
      return this.$store.getters.getJobs;
    },
    filteredJobs() {
      return this.$store.getters.getFilteredJobs;
    }
  },
};
</script>
