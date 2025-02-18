<script setup>
import { ref } from 'vue';
import ActionButton from "~/components/ActionButton.vue";

const contactForm = ref(null);

const scrollToContact = () => {
  contactForm.value?.$el.scrollIntoView({ behavior: 'smooth' });
};
const items = ref([
  {
    number: '01',
    title: 'ANALYSIS',
    description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
    bg: '/images/stages.png',
  },
  {
    number: '02',
    title: 'PROTOTYPE',
    description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
    bg: '/images/process-black.png',
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
    bg: '/images/stages.png',
  },
  {
    number: '04',
    title: 'DEVELOPMENT',
    description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
    bg: '/images/process-black.png',
  },
  {
    number: '05',
    title: 'LAUNCH',
    description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
    bg: '/images/stages.png',
  },
]);
const services = ref([
  {
    title: 'Online stores',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/development',
    price: '2000$'
  },
  {
    title: 'Landing pages',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/design',
    price: '2000$'
  },
  {
    title: 'Corporate websites',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/advertising',
    price: '2000$'
  },
  {
    title: 'Online stores',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/crm',
    price: '2000$'
  },
  {
    title: 'Landing pages',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/ai',
    price: '2000$'
  },
  {
    title: 'Corporate websites',
    text: 'Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.',
    route: '/bots',
    price: '2000$'
  },

])
const activeIndex = ref(null);
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
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
  <DevelopmentSteps>
    <template #step-name>
      Web development service
    </template>
    <template #step-button>
      <NuxtLink to="/services">
        Service
      </NuxtLink>
    </template>
    <template #left-content>
      <p class="mb-3">Lorem ipsum dolor sit amet consectetur. Convallis arcu nunc nec sagittis ullamcorper adipiscing. Justo gravida non elementum enim. Nullam vulputate varius nisi ullamcorper. Interdum viverra eget odio mattis mollis. Sit eu ultricies interdum libero auctor. Sagittis faucibus aenean urna volutpat quam libero potenti morbi. Volutpat sit nisi in et aliquet mauris potenti euismod. Tortor fermentum dolor amet fermentum sit
        est duis pretium praesent. Sed egestas fermentum dui bibendum molestie erat. Viverra aliquam posuere consectetur nisi.</p>
      <p>Lorem ipsum dolor sit amet consectetur. Convallis arcu nunc nec sagittis ullamcorper adipiscing. Justo gravida non elementum enim. Nullam vulputate varius nisi ullamcorper. Interdum viverra eget odio mattis mollis. Sit eu ultricies interdum libero auctor. Sagittis faucibus aenean urna volutpat quam libero potenti morbi. Volutpat sit nisi in et aliquet mauris potenti euismod. Tortor fermentum dolor amet fermentum sit est
        duis pretium praesent. Sed egestas fermentum dui bibendum molestie erat. Viverra aliquam posuere consectetur nisi..</p>
    </template>
    <template #accordion-items>
      <div v-for="(item, index) in items" :key="index"
           class="mb-2 rounded-[20px] w-full bg-center bg-cover"
           :style="{ backgroundImage: `url(${item.bg})`, marginTop: index >= 1 && index <= 4 ? '-2%' : '0%' }">
        <div @click="toggle(index)"
             class="px-6 py-4 transition-all duration-300"
             :class="index % 2 === 1 ? 'text-white' : 'text-black'">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-bold">{{ item.number }}</h3>
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
          </div>
          <div v-if="activeIndex === index" class="py-4 bg-transparent leading-[23px] transition-all duration-300">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </template>
  </DevelopmentSteps>
  <TypesOfSolution :services="services" @scroll-to-contact="scrollToContact" />
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