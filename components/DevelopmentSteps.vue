<script setup>
import { ref, defineProps } from 'vue';
import Accordion from "~/components/Accordion.vue";

const props = defineProps({
  title: {
    type: String,
    default: 'Development Process'
  },
  buttonText: {
    type: String,
    default: 'View More'
  }
});

const activeIndex = ref(null);
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="portfolio mx-[9.8%] py-24">
    <div class="flex items-center justify-between pb-8">
      <h3>
        <slot name="step-name">{{ title }}</slot>
      </h3>
      <button class="border px-[1rem] py-[0.4115rem] rounded-[90px]">
        <slot name="step-button">{{ buttonText }}</slot>
      </button>
    </div>

    <div class="flex gap-4">
      <div class="w-[49%]">
        <slot name="left-content">
          <p class="mb-3">Default text for left content. You can override this via slot.</p>
          <p>More default text here...</p>
        </slot>
      </div>

      <div class="w-[50%]">
        <slot name="accordion-items">
        </slot>
      </div>
    </div>
  </section>
</template>
