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
  <header
      class="
              bg-cover bg-center
              pb-0
              text-[var(--white-text)]
              bg-[url('/images/contact-hero-bg.png')]
              rounded-b-[50px]"
  >
    <section class=" px-[9.8%] ">
      <nav
        class="flex
                items-center justify-between
                  py-3"
      >
        <NuxtLink
            to="/"
            class="text-[1.556rem] mr-24"
        >
          Ocean Script
        </NuxtLink>
        <ul class="flex gap-24 ">
          <li>
            <NuxtLink
                to="/services"
            >
                Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/portfolio"
            >
              Portfolio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/contacts"
            >
              Contacts
            </NuxtLink>
          </li>
        </ul>
        <div
            class="flex"
        >
          <button
              class="flex items-center px-5 "
          >
            <img
                class="px-1.5"
                src="/public/images/lang-arrow.png"
                alt="arrow-down"
            >
            ENG
          </button>
          <button
              class="px-5 py-[12px]
                    bg-[var(--blue)]
                    rounded-[90px]"
              @click="$emit('scroll-to-contact')"
          >
            Leave a request
          </button>
      </div>
    </nav>
    </section>
    <Form />
  </header>

</template>