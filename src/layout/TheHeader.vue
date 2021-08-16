<template>
  <header class="relative">
    <div class="flex w-full px-5 pt-8 justify-between items-center absolute">
      <h1 class="text-secondary-white font-bold tracking-wider">devjobs</h1>
      <div class="flex max-w-24 justify-between items-center">
        <img src="../assets/desktop/icon-sun.svg" alt="icon-sun" class="w-5" />
        <Switch
          v-model="darkMode"
          @click="toggleMode"
          class="
            relative
            inline-flex
            items-center
            h-6
            rounded-full
            w-11
            mx-3
            bg-secondary-white
          "
        >
          <span class="sr-only">Switch dark mode</span>
          <span
            :class="darkMode ? 'translate-x-6' : 'translate-x-1'"
            class="
              inline-block
              w-4
              h-4
              transition
              duration-200
              ease-in-out
              transform
              bg-primary-violet
              rounded-full
            "
          />
        </Switch>
        <img
          src="../assets/desktop/icon-moon.svg"
          alt="icon-moon"
          class="w-4"
        />
      </div>
    </div>
    <img
      src="../assets/mobile/bg-pattern-header.svg"
      alt=""
      class="md:hidden max-w-screen-md w-full m-auto"
    />
    <img
      src="../assets/tablet/bg-pattern-header.svg"
      alt=""
      class="hidden md:block lg:hidden max-w-screen-lg w-full m-auto"
    />
    <img
      src="../assets/desktop/bg-pattern-header.svg"
      alt=""
      class="hidden lg:block max-w-screen-2xl m-auto"
    />
  </header>
</template>

<script>
import { Switch } from '@headlessui/vue';

export default {
  components: {
    Switch,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleMode() {
      this.$store.dispatch('setMode', this.darkMode);
    },
  },
};
</script>
