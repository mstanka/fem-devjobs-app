<template>
  <li
    class="
      w-4/5
      md:max-w-80 md:w-full
      h-64
      mx-auto
      rounded-lg
      relative
      flex flex-col
      justify-between
      bg-secondary-white
      text-secondary-grey
      dark:bg-primary-very-dark-blue
      px-7
      py-7
      my-12
    "
  >
    <router-link :to="`/jobs/${id}`">
      <div>
        <div
          class="
            w-14
            h-14
            absolute
            -top-6
            rounded-2xl
            bg-primary-violet
            grid
            place-content-center
          "
        >
          <img :src="logo" :alt="company" />
        </div>
        <div class="py-5">
          <span>{{ postedAt }}</span>
          <span class="mx-3 font-bold">&#183;</span>
          <span>{{ contract }}</span>
        </div>
        <h3
          class="
            text-primary-midnight
            hover:text-secondary-grey
            dark:text-secondary-white dark:hover:text-secondary-grey
            font-bold
            pb-3
            cursor-pointer
            transition
            duration-300
            ease-in-out
          "
        >
          {{ position }}
        </h3>
        <p>{{ company }}</p>
      </div>
      <p class="text-primary-violet font-bold text-sm pt-8">{{ location }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    company: String,
    logo: String,
    logoBackground: String,
    position: String,
    postedAt: String,
    contract: String,
    location: String,
  },
};
</script>
