<template>
  <header class="relative">
    <div class="flex w-full px-5 pt-8 justify-between items-center absolute">
      <h1 class="text-secondary-white font-bold tracking-wider">devjobs</h1>
      <div class="flex max-w-24 justify-between items-center">
        <img src="../assets/desktop/icon-sun.svg" alt="icon-sun" class="w-5" />
        <div
          class="
            relative
            inline-block
            w-12
            h-6
            mx-3
            align-middle
            select-none
            bg-secondary-white
            rounded-full
          "
        >
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            v-model="checked"
            @click="toggleMode"
            class="
              bg-primary-violet
              outline-none
              focus:outline-none
              right-7
              checked:right-1
              top-1
              duration-300
              ease-in
              absolute
              block
              w-4
              h-4
              rounded-full
              bg-white
              appearance-none
              cursor-pointer
            "
          />
        </div>

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
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleMode() {
      this.$store.dispatch('setMode', this.checked);
    },
  },
};
</script>
