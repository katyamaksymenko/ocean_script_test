
<template>
  <section class="portfolio mx-[9.8%] py-24">
    <div
        class="flex items-center justify-between pb-8">
      <h3>
        Our values
      </h3>
      <NuxtLink >
        <button
            class="border px-[1rem] py-[0.4115rem] rounded-[90px]">
          Values
        </button>
      </NuxtLink>
    </div>
    <div class="flex gap-8 flex-wrap">
      <div
          v-for="(item, index) in items"
          :key="index"
          :style="{ backgroundImage: `url(${item.bg})` }"
          :class="['w-[31.725%] p-6 rounded-[30px] bg-cover bg-center relative', item.textColor]"
      >
        <div v-if="index === 1" class="absolute inset-0 bg-[#000011]/86 rounded-[30px]"></div>
        <div class="relative">
          <div class="flex justify-between">
            <p class="text-[var(--blue)]">{{ item.title }}</p>
            <div class="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <h3 class="pt-24">{{ item.text }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup >
const items = [
  { bg: "/images/pains.png", title: "VALUE", text: "WRITE SOMETHING", textColor: "text-black" },
  { bg: "/images/pains.png", title: "VALUE", text: "WRITE SOMETHING", textColor: "text-white" },
  { bg: "/images/pains.png", title: "VALUE", text: "WRITE SOMETHING", textColor: "text-black" }
];
</script>