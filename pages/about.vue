<script setup>
import { ref } from 'vue';
import ActionButton from "~/components/ActionButton.vue";
import Mission from "~/components/Mission.vue";

const contactForm = ref(null);

const scrollToContact = () => {
  contactForm.value?.$el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <AppHeader >
    <template v-slot:hero-button >
      About
    </template>
    <template v-slot:hero-title >
      About us
    </template>
    <template v-slot:hero-slogan >
      Lorem ipsum dolor sit amet consectetur. Viverra est
      eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat.
    </template>
    <ActionButton
        class="mx-auto mb-12 "
        @click="scrollToContact">
      Leave request
    </ActionButton>
    <div class="w-full h-[3.55rem]"></div>
  </AppHeader>
  <Mission />
  <OurValues />
  <ContactForm ref="contactForm"/>
  <AppFooter />
</template>