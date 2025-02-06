<template>
  <section
      class="statistics flex gap-30 pb-25"
  >
    <div
        v-for="(item, index) in statistics"
        :key="index"
        class="flex flex-col items-start"
    >
      <h1 class="">{{ item.number }}</h1>
      <p class="">{{ item.paragraph }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const statistics = ref([
  { number: '5+', paragraph: 'years of experience' },
  { number: '100+', paragraph: 'successful cases' },
  { number: '8', paragraph: 'professionals' }
]);
</script>

<style scoped>

</style>