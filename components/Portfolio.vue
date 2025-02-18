<script setup>
defineProps({
  centerButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <section class="portfolio xl:mx-[9.8%] mx-4 pb-24">
    <div>
      <div
          class="flex flex-col-reverse lg:flex-row
                  lg:items-center justify-between pb-8">
        <h3 class="mt-2 lg:mt-0" >
            <slot name="title" ></slot>
        </h3>
        <slot name="btn" ></slot>
      </div>
      <div
          class="portfolio-works
                flex flex-wrap gap-8
                 text-[var(--white-text)] ">
        <div class="work
                  bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/work1.png')]
                  bg-cover bg-center
                  rounded-[40px]
                  px-9 py-8 xl:w-[48.59%] w-[100%]"
        >
          <div class="flex xl:flex-row flex-col gap-3">
            <div>
              <LightButton>
                <template v-slot:button-name>Online store</template>
              </LightButton>
            </div>
            <div>
              <LightButton>
                <template v-slot:button-name>Web Design</template>
              </LightButton>
            </div>
            <div>
              <LightButton>
                <template v-slot:button-name>Web development</template>
              </LightButton>
            </div>
          </div>
          <h4 class="pt-96">
            Clothes Marketplace
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.
          </p>
        </div>
        <div
            class="work
                    bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/work2.png')]
                    bg-cover bg-center
                    rounded-[40px] px-9 py-8 xl:w-[48.59%] w-[100%]"
        >
          <div class="flex xl:flex-row flex-col gap-3">
            <div>
              <LightButton>
                <template v-slot:button-name>Online store</template>
              </LightButton>
            </div>
            <div>
              <LightButton>
                <template v-slot:button-name>Web Design</template>
              </LightButton>
            </div>
            <div>
              <LightButton>
                <template v-slot:button-name>Web development</template>
              </LightButton>
            </div>
          </div>
          <h4 class="pt-96">
            Clothes Marketplace
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.
          </p>
        </div>
        <div
            class="work
                  bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/work3.png')]
                  bg-cover bg-center px-9 py-8
                  xl:w-[48.59%] w-[100%] rounded-[42px] ">
          <div class="flex xl:flex-row flex-col gap-3">
            <div>
              <LightButton>
                <template v-slot:button-name>Online store</template>
              </LightButton>
            </div>
            <div>
              <LightButton>
                <template v-slot:button-name>Web Design</template>
              </LightButton>
            </div>
            <div>
              <LightButton>
                <template v-slot:button-name>Web development</template>
              </LightButton>
            </div>
          </div>
          <h5 class="pt-96">
            Clothes Marketplace
          </h5>
          <p>Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.
          </p>
        </div>
        <div
            class="work
            bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/work4.png')]
            bg-cover bg-center
            rounded-[40px] px-9 py-8 xl:w-[48.59%] w-[100%]">
          <div class="flex xl:flex-row flex-col gap-3">
            <div>
              <LightButton>
                <template v-slot:button-name>Online store</template>
              </LightButton>
            </div>
            <div>
              <LightButton>
                <template v-slot:button-name>Web Design</template>
              </LightButton>
            </div>
            <div>
              <LightButton>
                <template v-slot:button-name>Web development</template>
              </LightButton>
            </div>
          </div>
          <h4 class="pt-96">
            Clothes Marketplace
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum.
          </p>
        </div>
      </div>
    </div>
    <ActionButton
        @click="$emit('scroll-to-contact')"
        :class="centerButton ? 'mx-auto' : 'ml-0'"
        class="text-[var(--white-text)] mt-12"
    >
      Learn more
    </ActionButton>
  </section>
</template>

<style scoped>


</style>