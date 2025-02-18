<script setup>
import {ref} from "vue";


const services = ref([
  {
    title: 'Web development',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/development',
    url: "/services-page/1.png",
  },
  {
    title: 'UI/UX Design',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/design',
    url: "/services-page/2.png",
  },
  {
    title: 'Advertising',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/advertising',
    url: "/services-page/3.png",
  },
  {
    title: 'CRM and ERP systems',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/crm',
    url: "/services-page/4.png",
  },
  {
    title: 'AI Integration',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/ai',
    url: "/services-page/5.png",
  },
  {
    title: 'Telegram bots',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/bots',
    url: "/services-page/6.png",
  },

])

const hoverIndex = ref(null);

</script>

<template>
  <section
      class="px-[9.8%] py-32"
  >
    <div class="services-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


    <div
          v-for="(item, index) in services"
          :key="index"
          @mouseenter="hoverIndex = index"
          @mouseleave="hoverIndex = null"
          class="flex
            relative group bg-[url('/images/services-page.png')]
             cursor-pointer rounded-[20px]
             p-5 z-10
             bg-cover bg-center overflow-hidden"
      >
        <div class="relative z-10">
          <h4 class="before:content-['•'] before:mr-4">
            {{ item.title }}
          </h4>
          <p class="pt-4 pb-34">
            {{ item.text }}
          </p>

          <NuxtLink :to="item.route">
            <button
                class="flex items-center
         px-[1.685rem] py-[0.855rem]
         bg-[var(--blue-text)] text-[var(--white-text)]
         rounded-[90px] transform transition duration-300
         hover:scale-105">
              Learn more
              <img
                  src="/images/learn-arrow.png"
                  alt="arrow"
                  class="ml-4 w-4 h-4">
            </button>
          </NuxtLink>
        </div>
        <img
            :src="`/images/${item.url}`"
            alt="service-image"
            class="absolute z-20 top-12 right-0 ">
      </div>

    </div>
  </section>

</template>

<style scoped>

</style>