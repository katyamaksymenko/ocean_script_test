<script setup >
import { ref } from 'vue';

const formData = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  budget: ''
});
const submitForm = () => {
  console.log("Form Submitted", formData.value);
  alert("Form submitted successfully!");
};

</script>

<template>
  <section
      class="text-[var(--white-text)]
              relative
              bg-[var(--black)]
              px-[9.8%] py-16
              rounded-[40px]
              flex items-center">
    <div class="w-[36%]">
      <NuxtLink to="/contacts">
        <LightButton>
          <template v-slot:button-name>
            Contact
          </template>
        </LightButton>
      </NuxtLink>
      <h3 class="leading-[50px] mt-6">
        Let's discuss your tasks. Contact today!
      </h3>
    </div>
    <img class="absolute right-0" src="/images/form-img.png" alt="cristal">
    <img class="absolute top-0" src="/images/form-imgs.png" alt="cristal">
    <div>
      <form @submit.prevent="submitForm"
            class="w-[37.5rem] space-y-4.5">
        <div class="relative">
          <input
              type="text"
              v-model="formData.name"
              placeholder="Your name*" required
              class="w-full p-5
              text-white
              transition-all duration-300
              border-1 border-[var(--white-text)]
              rounded-full outline-none
              hover:border-[var(--blue)]
              focus:border-[var(--blue)]
              placeholder-[var(--white-text)]"/>
        </div>
        <div class="relative">
          <input
              type="tel"
              v-model="formData.phone"
              placeholder="Your phone number*" required
              class="w-full p-5
              text-[--var(white-text)]
              transition-all duration-300
              border-1 border-[var(--white-text)]
              placeholder-[var(--white-text)]
              rounded-full outline-none
              hover:border-[var(--blue)]
              focus:border-[var(--blue)]"/>
        </div>
        <div class="relative">
          <input
              type="email"
              v-model="formData.email"
              placeholder="Your email*" required
              class="w-full p-5
              text-white
              transition-all duration-300
              border-1 border-[var(--white-text)]
              placeholder-[var(--white-text)]
              rounded-full outline-none
              hover:border-[var(--blue)]
              focus:border-[var(--blue)]"/>
        </div>
        <div class="relative">
          <select
              v-model="formData.service" required
              class="w-full p-5
              text-white
              transition-all duration-300
              border-1 border-[var(--white-text)]
              rounded-full outline-none
              hover:border-[var(--blue)]
              focus:border-[var(--blue)]
              appearance-none">
            <option
                value="" disabled selected>
              Service you're interested in*
            </option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="SEO">SEO</option>
          </select>
        </div>
        <div class="relative">
          <select v-model="formData.budget" required
                  class="w-full p-5
                  text-white
                  transition-all duration-300
                  border-1
                  border-[var(--white-text)]
                  rounded-full outline-none
                  hover:border-[var(--blue)]
                  focus:border-[var(--blue)]
                  appearance-none">
            <option value="" disabled selected>Your budget*</option>
            <option value="Less than $1,000">Less than $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000+">$5,000+</option>
          </select>
        </div>
        <div class="flex gap-4">
          <button
              type="submit"
              class="flex items-center
                     pl-[4rem] pr-[5.755rem] py-[1.115rem]
                     bg-[var(--blue)]
                     rounded-[90px]
                     hover:shadow-[6px_6px_6px_rgba(255,255,255,0.2)]
                     transition duration-300"
            >
            <img
                src="public/images/action-btn.png"
                alt="action"
                class="mr-9 ">
            Continue
          </button>
          <p class="text-[14px] text-left mt-2 leading-[18px] tracking-[1px]">
            By clicking the “Send” button, you consent to the processing of personal data.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
select {
  background-image: url("/images/arrow-down.png");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 20px;
}
</style>