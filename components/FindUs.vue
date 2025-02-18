<script setup >

</script>

<template>
  <section class="footer-block
                  px-[9.8%] py-24
                  space-y-4">
    <div class="flex
                justify-between items-center
                mb-8 ">
      <h3>
        Find us here
      </h3>
      <NuxtLink to="/services">
        <LightButton class="border-1 border-black">
          <template v-slot:button-name>
            Contacts
          </template>
        </LightButton>
      </NuxtLink>
    </div>
    <div class="flex justify-between items-center">
      <address class="space-y-4">
        <p class="flex ">
          <img class="mr-2 cursor-pointer" src="/images/mail.svg" alt="mail">
          <a href="tel:+380 97 007 07 07">+380 97 007 07 07</a>
        </p>
        <p class="flex mb-5 cursor-pointer">
          <img class="mr-2 cursor-pointer" src="/images/phone.svg" alt="phone">
          <a href="mailto:somemail@gmail.com">somemail@gmail.com</a>
        </p>
      </address>
      <div class="flex space-x-7 h-[3.685rem] ">
        <img class="cursor-pointer" src="/images/telegram.png" alt="telegram">
        <img class="cursor-pointer" src="/images/insta.png" alt="instagram">
        <img class="cursor-pointer" src="/images/tik-tok.png" alt="in">
        <img class="cursor-pointer" src="/images/x.png" alt="in">
      </div>
    </div>
  </section>
  <AppFooter />

</template>

<style scoped>

</style>