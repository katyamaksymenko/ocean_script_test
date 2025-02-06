<script setup>
import { ref } from 'vue';
import ActionButton from "~/components/ActionButton.vue";

const contactForm = ref(null);

const scrollToContact = () => {
  contactForm.value?.$el.scrollIntoView({ behavior: 'smooth' });
};

const items = ref([
  { title: "Websites" },
  { title: "Online-stores" },
  { title: "Landing pages" },
  { title: "CRM-systems" },
  { title: "Branding and logo" },
  { title: "App design" },
  { title: "App design" },
]);
</script>

<template>
    <AppHeader @scroll-to-contact="scrollToContact">
      <template v-slot:hero-button >
        Portfolio
      </template>
      <template v-slot:hero-title >
        Our recent projects
      </template>
      <template v-slot:hero-slogan >
        Lorem ipsum dolor sit amet consectetur.
        Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat.
      </template>
      <ActionButton
          class="mx-auto mb-12 "
          @click="scrollToContact">
        Leave a request
      </ActionButton>
      <div class="w-full h-[3.55rem]"></div>
    </AppHeader>
  <section class="mx-[9.8%] flex flex-wrap gap-4 pt-24 text-[var(--black)]">
    <button
        v-for="(item, index) in items"
        :key="index"
        class="border-[2.5px] text-[1.335rem]
              px-[1rem] py-[0.4115rem] rounded-[90px]
             transition-all duration-300 ease-in-out
             hover:bg-[var(--blue-text)]
             hover:text-white hover:shadow-md"
    >
      {{ item.title }}
    </button>
  </section>
    <Portfolio :centerButton="false" @click="scrollToContact"/>
    <ContactForm ref="contactForm"/>
    <AppFooter />
</template>