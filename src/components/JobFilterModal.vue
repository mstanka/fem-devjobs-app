<template>
  <div
    class="
      fixed
      z-20
      top-0
      left-0
      w-full
      h-full
      bg-primary-midnight bg-opacity-75
    "
  >
    <div class="relative z-30 w-4/5 mx-auto mt-80">
      <div
        class="rounded-lg p-6 bg-secondary-white dark:bg-primary-very-dark-blue"
      >
        <div
          class="
            border-b border-secondary-grey
            dark:border-secondary-dark-grey
            pb-5
          "
        >
          <div class="flex flex-column items-center">
            <svg class="w-7 h-7 text-primary-violet fill-current">
              <path
                d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              />
            </svg>
            <input
              type="text"
              placeholder="Filter by location..."
              class="p-2 w-full dark:bg-primary-very-dark-blue cursor-pointer"
            />
          </div>
        </div>

        <div class="flex items-center py-6">
          <input
            type="checkbox"
            class="bg-secondary-grey w-4 h-4 p-4 cursor-pointer"
          />
          <label
            for="checkbox"
            class="
              text-primary-midnight
              dark:text-secondary-white
              font-bold
              ml-3
            "
            >Full Time Only
          </label>
        </div>

        <button
          type="submit"
          class="
            font-bold
            cursor-pointer
            text-center
            bg-primary-violet
            rounded-md
            py-3
            px-3
            w-full
          "
          @click="$emit('close')"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
