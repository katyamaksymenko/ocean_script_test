<script setup>
import { ref } from 'vue';
import Technologies from "~/components/Technologies.vue";

const contactForm = ref(null);
const servicesSection = ref(null);

const scrollToContact = () => {
  contactForm.value?.$el.scrollIntoView({ behavior: 'smooth' });
};

const scrollToServices = () => {
  servicesSection.value?.$el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <AppHeader @scroll-to-contact="scrollToContact">
    <template v-slot:hero-button >
      UI/UX Design
    </template>
    <template v-slot:hero-title >
      Web development
    </template>
    <template v-slot:hero-slogan >
      Lorem ipsum dolor sit amet consectetur. Viverra est eget ut
      ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat.
    </template>
    <ActionButton
        class="mx-auto mb-12 "
        @click="scrollToContact">
      Leave request
    </ActionButton>
    <div class="w-full h-[3.55rem]"></div>
  </AppHeader>
  <DevelopmentSteps />
  <SolutionTypes />
  <Portfolio
      @scroll-to-contact="scrollToContact"/>
  <Technologies />
  <ContactFormSmall ref="contactForm"/>
  <AppFooter />
</template>