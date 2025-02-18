<script setup>
import {defineProps, ref} from "vue";

const hoverIndex = ref(null);
defineEmits(['scroll-to-contact']);
const props = defineProps({
  services: {
    type: Array,
    default: () => []
  }
});

</script>

<template>
  <section
      class="px-[9.8%] pb-10
            bg-[var(--black)] rounded-[40px]
            text-[var(--white-text)]"
  >
    <div
        class="flex
                justify-between items-center
                mb-8
                pt-12"
    >
      <h3>
        Types of solutions
      </h3>
      <NuxtLink to="/services">
        <LightButton>
          <template v-slot:button-name>
            Solutions
          </template>
        </LightButton>
      </NuxtLink>
    </div>
    <div class="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-3 flex-wrap justify-between xl:justify-around">
    <div
          v-for="(item, index) in services"
          :key="index"
          @mouseenter="hoverIndex = index"
          @mouseleave="hoverIndex = null"
          class="relative group
            cursor-pointer border
            rounded-[20px]
            w-[27rem]
            p-5 z-10 mb-6
            bg-cover bg-center
            overflow-hidden"
      >
          <div
              class="absolute inset-0
                bg-[url('/images/pains.png')]
                bg-cover bg-center
                opacity-0
                translate-y-full
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-500 ease-in-out z-0"
          >
          </div>
          <div class="relative z-10 group
                      group-hover:text-[var(--black)]
                      transition-all duration-400">
              <h4
                  class="relative flex items-center z-10"
              >
                {{ item.title }}
              </h4>
              <p class="pt-4 pb-34">
                {{ item.text }}
              </p>
              <div class="flex items-center justify-between">
                <NuxtLink :to="item.route">
                  <button
                      class="flex items-center
                             px-[1.685rem] py-[0.855rem]
                             bg-[var(--blue-text)] rounded-[90px]
                             group-hover:text-[var(--white)]
                             transition-all duration-400"
                  >
                    Learn more
                    <img
                        src="/images/learn-arrow.png"
                        alt="arrow"
                        class="ml-4 transition-all duration-400"
                    >
                  </button>
                </NuxtLink>
                <div>
                from
                <span class="text-[var(--blue)]">
                  {{ item.price }}
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
    <ActionButton
        @click="$emit('scroll-to-contact')"
        class=" mx-auto mt-4">
      Send request
    </ActionButton>
  </section>

</template>

<style scoped>

</style>