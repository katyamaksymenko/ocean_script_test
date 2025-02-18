<template>
  <section
      class="statistics flex justify-between pb-25"
  >
    <div
        v-for="(item, index) in statistics"
        :key="index"
        class="flex flex-col items-start lg:w-[20%] w-[26%]"
    >
      <h1 class="">{{ item.number }}</h1>
      <p class="text-left">
        <template v-if="index === 2">
          professionals <span class="md:hidden inline">in our team</span>
        </template>
        <template v-else>
          {{ item.paragraph }}
        </template>
      </p>
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