<script setup >
import { ref } from 'vue';

const items = ref([
  { number: '01', title: 'ANALYSIS', description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim ' +
        'et venenatis lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin ' +
        'rutrum consectetur montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id' +
        ' suspendisse adipiscing suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.'
    ,bg: "/images/stages.png" },
  { number: '02', title: 'PROTOTYPE', description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis ' +
        'lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur ' +
        'montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing' +
        ' suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
    bg: "/images/process-black.png"},
  { number: '03', title: 'DESIGN', description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis ' +
        'lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur ' +
        'montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing ' +
        'suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
        bg: "/images/stages.png" },
  { number: '04', title: 'DEVELOPMENT', description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis ' +
        'lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur ' +
        'montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing ' +
        'suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
    bg: "/images/process-black.png" },
  { number: '05', title: 'LAUNCH', description: 'Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis ' +
        'lobortis purus nisl elit. Nec a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur ' +
        'montes elit libero. Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing ' +
        'suspendisse. Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.',
    bg: "/images/stages.png" }
]);
const activeIndex = ref(null);
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="portfolio mx-[9.8%] py-24">
    <div>
      <div
          class="flex items-center justify-between pb-8">
        <h3>
          Web development service
        </h3>
        <NuxtLink to="/portfolio">
          <button
              class="border px-[1rem] py-[0.4115rem] rounded-[90px]">
            Service
          </button>
        </NuxtLink>
      </div>
    </div>
    <div class="flex gap-4 ">
      <div class="w-[49%]">
        <p>Lorem ipsum dolor sit amet consectetur. Convallis arcu nunc nec sagittis ullamcorper adipiscing. Justo gravida non elementum enim. Nullam vulputate varius nisi ullamcorper. Interdum viverra eget odio mattis mollis. Sit eu ultricies interdum libero auctor. Sagittis faucibus aenean urna volutpat quam libero potenti morbi. Volutpat sit nisi in et aliquet mauris potenti euismod. Tortor fermentum dolor amet fermentum sit
          est duis pretium praesent. Sed egestas fermentum dui bibendum molestie erat. Viverra aliquam posuere consectetur nisi.
        </p>
        <p>Tellus purus justo nisl lectus pellentesque. Feugiat mauris enim et venenatis lobortis purus nisl elit. Nec
          a sapien sollicitudin fermentum auctor non vestibulum volutpat. Proin rutrum consectetur montes elit libero.
          Suspendisse dolor blandit sit in lorem magna eros lectus. Morbi bibendum id suspendisse adipiscing suspendisse.
          Scelerisque elit ut morbi ullamcorper lacus. Blandit aliquam tincidunt eget habitant.
        </p>
      </div>
      <div class="w-[50%]">
          <div  v-for="(item, index) in items" :key="index"
                class="mb-2 rounded-[20px] w-full bg-center bg-cover"
                :style="{
                marginTop: index >= 1 && index <= 4 ? '-2%' : '0%',
                backgroundImage: `url(${item.bg})`,}">
            <div
                @click="toggle(index)"
                class=" px-6 py-4  transition-all duration-300"
                :class="index % 2 === 1 ? 'text-white' : 'text-black'"

            >
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold">{{ item.number }}</h3>
                <h3 class="text-xl font-semibold">{{ item.title }}</h3>
              </div>

              <div
                  v-if="activeIndex === index"
                  class="py-4 bg-transparent leading-[23px] transition-all duration-300 "
              >
                <p>{{ item.description }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

  </section>
</template>

<style scoped>

</style>