<script setup lang="ts">
import { useRoute } from '#imports';
import { computed } from 'vue';
import ActionButton from "~/components/ActionButton.vue";

const route = useRoute();

const backgrounds: Record<string, string> = {
  '/': "/images/hero-bg.png",
  '/services': "/images/services-hero-bg.png",
  '/portfolio': "/images/portfolio-hero-bg.png",
  '/contacts': "/images/contact-bg.png",
  '/development': "/images/development-hero-bg.png",
  '/design': "/images/design-hero-bg.png",
  '/advertising': "/images/adv-hero-bg.png",
  '/crm': "/images/crm-hero-bg.png",
  '/about': "/images/about-hero-bg.png",
  '/ai': "/images/ai-hero-bg.png",
  '/bots': "/images/bots-hero-bg.png",

};

const bgImage = computed(() => backgrounds[route.path] || "/images/default-bg.png");
defineEmits(['scroll-to-contact']);
</script>

<template>
  <header
      :style="{ backgroundImage: `url(${bgImage})` }"
      class="
              bg-cover bg-center
              px-[9.8%] pb-0
              text-[var(--white-text)]

              rounded-b-[50px]"
  >
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
    <section
        :class="route.path === '/'
             ? 'pt-[23rem]'
             : ['/services', '/portfolio', '/advertising','/development', '/ai', '/bots', '/design', '/crm', '/about' ].includes(route.path)
             ? 'pt-[5rem]'
             : 'pt-[18rem]'"
        class="hero
                w-[45rem]
                m-auto
                text-center">
      <LightButton>
        <template
            v-slot:button-name
        >
          <slot name="hero-button"/>
        </template>
      </LightButton>
      <h2
          class="mt-4.5
          font-extrabold
          leading-[88.2px]"
      >
        <slot name="hero-title" />
      </h2>
      <p
        class="pt-4 pb-6"
      >
        <slot name="hero-slogan"/>
      </p>

      <slot />
    </section>
  </header>
</template>

<style scoped>


</style>