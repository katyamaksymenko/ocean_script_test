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
                  lg:mx-[9.8%]
                  mx-[2%]
                  text-[var(--black)]
                  lg:py-32 py-20"
  >
    <div
        class="flex flex-col-reverse lg:flex-row
              lg:items-center justify-between pb-4">
      <h4>
        Customer pains
      </h4>
      <button
        class="rounded-[90px] border-1 px-[1rem] lg:h-[42px] w-[71px] h-[38px] lg:w-[81px] lg:mb-0 mb-2">
        Pains
      </button>
    </div>
    <div class="xl:flex flex-row ">
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
          class="lg:w-[70%] w-[100%]"
      >
        <ul
            v-for="(item, index) in plans"
            :key="index"
        >
          <li
              class="mb-4 py-3 px-4
                    flex lg:flex-row flex-col lg:items-center
                    bg-[url('/images/pains.png')]
                    bg-cover bg-[50%_22%]
                    rounded-[20px] "
          >
            <div class="lg:w-[40%] ">
              <p class="text-[var(--blue-text)] pb-2">
                {{ item.number }}
              </p>
              <h5>{{ item.title }}</h5>
            </div>

            <div class="lg:w-[55%]">
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