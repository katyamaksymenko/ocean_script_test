<template>
  <section class="lg:px-[9.8%] px-[2%]  relative pb-28">
    <div class="flex flex-col-reverse lg:flex-row
                lg:items-center justify-between pb-8">
      <h3>Stages of work</h3>
      <NuxtLink to="/services" class="mb-2 lg:mb-0">
        <button class="border px-[1rem] py-[0.4115rem] rounded-[90px]">
          Work process
        </button>
      </NuxtLink>
    </div>
    <div class=" flex flex-col gap-6">
      <div
          v-for="(item, index) in items"
          :key="index"
          @mouseenter="hoverIndex = index"
          @mouseleave="hoverIndex = null"
          class="bg-cover bg-bottom px-10 py-[3.855rem] mb-4 relative overflow-hidden rounded-[40px] transition-transform duration-500 ease-in-out"
          :style="{
          backgroundImage: `url(${item.bg})`,
          marginTop: getMarginTop(index),
          zIndex: hoverIndex === index ? '50' : '10',
          transform: hoverIndex === index ? 'scale(1.01)' : 'scale(1)',
          boxShadow: hoverIndex === index ? '0px 15px 40px rgba(0, 0, 0, 0.3)' : 'none'
        }"
          >
        <div class=" z-10">
          <div
              :style="{ backgroundColor: item.color }"
              class="w-4 h-4 rounded-full absolute top-0 right-0 mt-5 mr-5"
          ></div>

          <div class="xl:flex xl:flex-row flex-col justify-between ">
            <img :src="item.url" alt="wave" class="w-[40%] xl:w-[11%]">
            <h1 :class="index % 2 === 0 ? 'text-white' : 'text-black'" class="uppercase">
              {{ item.title }}
            </h1>
          </div>
        </div>

      </div>
    </div>
    <ActionButton
        @click="$emit('scroll-to-contact')"
        class="text-[var(--white-text)] mt-12 md:hidden mx-auto "
    >
      Learn more
    </ActionButton>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const hoverIndex = ref(null);

const items = ref([
  { color: "#f4f1f1", url: "/images/01.png", title: "Analysis", bg: "/images/process-black.png" },
  { color: "#050505", url: "/images/02.png", title: "Prototype", bg: "/images/stages.png" },
  { color: "#f4f1f1", url: "/images/03.png", title: "Development", bg: "/images/process-black.png" },
  { color: "#040303", url: "/images/04.png", title: "Testing", bg: "/images/stages.png" },
  { color: "#f4f1f1", url: "/images/05.png", title: "Launch", bg: "/images/process-black.png" }
]);
const isLgOrSmaller = ref(false)

function updateWindowSize() {
  isLgOrSmaller.value = window.innerWidth <= 1024
}

onMounted(() => {
  updateWindowSize()
  window.addEventListener('resize', updateWindowSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowSize)
})

function getMarginTop(index) {
  if (index >= 1 && index <= 4) {
    return isLgOrSmaller.value ? '-20%' : '-5%'
  }
  return '0%'
}
</script>
