<script setup>
import { ref } from 'vue';
import ActionButton from "~/components/ActionButton.vue";

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
      Web development
    </template>
    <template v-slot:hero-title >
      Web development
    </template>
    <template v-slot:hero-slogan >
      Lorem ipsum dolor sit amet consectetur.
      Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras
      phasellus ullamcorper varius placerat.
    </template>
    <ActionButton
        class="mx-auto mb-12 "
        @click="scrollToContact">
      Leave request
    </ActionButton>
    <div class="w-full h-[3.55rem]"></div>
  </AppHeader>
  <DevelopmentSteps />
  <TypesOfSolution @scroll-to-contact="scrollToContact"/>
  <Portfolio @scroll-to-contact="scrollToContact" class="pt-24">
    <template v-slot:title > Our latest works</template>
    <template v-slot:btn>
      <NuxtLink to="/portfolio">
        <button class="border px-[1rem] py-[0.4115rem] rounded-[90px]">
          Portfolio
        </button>
      </NuxtLink>
    </template>
  </Portfolio>
  <Technologies />
  <ContactFormSmall ref="contactForm"/>
  <AppFooter />
</template>