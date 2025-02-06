<script setup>
import { ref } from 'vue';
import ActionButton from "~/components/ActionButton.vue";

const contactForm = ref(null);

const scrollToContact = () => {
  contactForm.value?.$el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <AppHeader @scroll-to-contact="scrollToContact">
    <template v-slot:hero-button >
      Services
    </template>
    <template v-slot:hero-title >
      Our services
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
  <ServicesPage />
  <ContactForm ref="contactForm"/>
  <AppFooter />
</template>