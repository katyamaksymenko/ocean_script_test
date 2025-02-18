<script setup>
import {ref} from "vue";

const services = ref([
  {
    title: 'Web development',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/development'
  },
  {
    title: 'UI/UX Design',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/design'
  },
  {
    title: 'Advertising',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/advertising'
  },
  {
    title: 'CRM and ERP systems',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/crm'
  },
  {
    title: 'AI Integration',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/ai'
  },
  {
    title: 'Telegram bots',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/bots'
  },

])

const hoverIndex = ref(null);
defineEmits(['scroll-to-contact']);

const isHovered = ref(false);

</script>
<template>
  <section
      class="xl:px-[9.8%] px-4 pb-10
            bg-[var(--black)] rounded-[40px]
            text-[var(--white-text)]"
  >
    <div
        class="flex flex-col-reverse lg:flex-row
                justify-between lg:items-center
                mb-4
                pt-12"
    >
      <h3>
        Services
      </h3>
      <NuxtLink to="/services" class="mb-2 lg:mb-0">
        <LightButton>
          <template v-slot:button-name>
            Our services
          </template>
        </LightButton>
      </NuxtLink>
    </div>
    <div
        class="services-items flex flex-wrap justify-between"
    >
        <div
            v-for="(item, index) in services"
            :key="index"
            @mouseenter="hoverIndex = index"
            @mouseleave="hoverIndex = null"
            class="xl:w-[calc(33.1%-20px)]
            relative group
            cursor-pointer border
            rounded-[20px]
            p-5 z-10 mb-[4%]
            bg-cover bg-center
            overflow-hidden"
        >
          <div
              class="absolute inset-0
              bg-[url('/images/hover-bg.png')]
              bg-cover bg-center
              opacity-0
              translate-y-full
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all duration-500 ease-in-out z-0"
          ></div>
          <div class="relative z-10 group">
            <h4 class="relative flex items-center z-10">
              <span class="w-[9px] h-[9px]
                          bg-[var(--white-text)] mr-4
                          before:bg-[var(--white-text)]
                          rounded-full  before:mr-4">
              </span>
              {{ item.title }}
            </h4>
            <p class="pt-4 pb-20 md:pb-34">
              {{ item.text }}
            </p>
            <NuxtLink :to="item.route">
              <button
                  class="hidden md:flex items-center
                         px-[1.685rem] py-[0.855rem]
                         bg-[var(--blue-text)] rounded-[90px]
                         group-hover:bg-[var(--white-text)]
                         group-hover:text-[var(--blue-text)]
                         transition-all duration-400"
              >
                Learn more
                <img
                    src="/images/learn-arrow.png"
                    alt="arrow"
                    class="ml-4 transition-all duration-400 group-hover:hidden"
                >
                <img
                    src="/images/blue-arrow.png"
                    alt="arrow-hover"
                    class="ml-4 transition-all duration-400 hidden group-hover:block"
                >
              </button>
            </NuxtLink>
          </div>

        </div>
    </div>
    <ActionButton
        @click="$emit('scroll-to-contact')"
        class="mx-auto mt-4">
      Send request
    </ActionButton>
  </section>

</template>

<style >


</style>