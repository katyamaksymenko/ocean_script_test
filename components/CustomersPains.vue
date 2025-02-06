<script setup>
import { ref } from 'vue';

const plans = ref([
  {
    number: '(01)',
    title: 'No clear site development plan',
    text: 'We analyze the niche and create a project tailored to business goals.'
  },
  {
    number: '(02)',
    title: 'Outdated or inconvenient design',
    text: 'We offer modern UI/UX that improves engagement and sales.'
  },
  {
    number: '(03)',
    title: 'No clarity in customer management',
    text: 'We implement CRM, where all processes are streamlined and automated, which helps to maintain and develop the client base.'
  },
  {
    number: '(04)',
    title: 'Lack of knowledge in the field of AI',
    text: 'We integrate AI solutions that provide accurate analytics and simplify decision-making, taking business efficiency to the next level.'
  },
  {
    number: '(05)',
    title: 'Chaotic ads with low effectiveness',
    text: 'We develop a promotion strategy and set up precise targeting to ensure a stable flow of applications.'
  },
]);

</script>

<template>
  <section class="pains
                  mx-[9.8%]
                  text-[var(--black)]
                  py-32 "
  >
    <div
        class="flex justify-between pb-4">
      <h4>
        Customer pains
      </h4>
      <button
        class="rounded-[90px] border-1 px-[1rem] h-[42px]">
        Pains
      </button>
    </div>
    <div
        class="flex">
      <picture class="w-[30%]">
        <source
            srcset="/images/pain.png"
            media="(min-width: 1024px)">
        <source
            srcset="/images/pain-mob.png"
            media="(min-width: 768px)">
        <img
            src="/images/pain-mob.png"
            alt="Pain image">
      </picture>
      <div
          class="w-[70%]"
      >
        <ul
            v-for="(item, index) in plans"
            :key="index"
        >
          <li
              class="mb-4 py-3
                    flex items-center
                    bg-[url('/images/pains.png')]
                    bg-cover bg-[50%_22%]
                    rounded-[20px] "
          >
            <div class="w-[40%] mr-2">
              <p class="text-[var(--blue-text)] pb-2">
                {{ item.number }}
              </p>
              <h5>{{ item.title }}</h5>
            </div>

            <div class="w-[55%]">
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>