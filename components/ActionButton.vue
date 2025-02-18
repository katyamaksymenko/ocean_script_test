<script setup lang="ts">

</script>

<template>
  <button
      type="submit"
      class="flex items-center
             lg:px-[6%] px-[30%] py-[1.115rem]
             bg-[var(--blue)] rounded-[90px]"
  >
    <img
        src="public/images/action-btn.png"
        alt="action"
        class="mr-3">
    <slot />
  </button>
</template>


<style scoped>

</style>