<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const activeIndex = ref(null);
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div>
    <div v-for="(item, index) in props.items" :key="index"
         class="mb-2 rounded-[20px] w-full bg-center bg-cover"
         :style="{ backgroundImage: `url(${item.bg})` }">
      <div @click="toggle(index)" class="px-6 py-4 transition-all duration-300"
           :class="index % 2 === 1 ? 'text-white' : 'text-black'">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-bold">{{ item.number }}</h3>
          <h3 class="text-xl font-semibold">{{ item.title }}</h3>
        </div>
        <div v-if="activeIndex === index" class="py-4 leading-[23px] transition-all duration-300">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
