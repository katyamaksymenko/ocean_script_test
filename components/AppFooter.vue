<script setup lang="ts">

</script>

<template>
  <footer
      class="bg-[url('/images/stages.png')]
         bg-cover bg-[center_50%]
         md:flex flex-row
         xl:space-x-40 space-x-16
         xl:px-[9.8%] px-6 py-16 "
  >
    <section class="footer-block xl:w-[230px] w-full space-y-4">
      <h4 class="text-3xl">Ocean Script</h4>
      <p>Lorem ipsum dolor sit amet consectetur. Tellus massa vehicula condimentum ut feugiat volutpat sed.</p>
    </section>

    <nav class="xl:mt-0 mt-8 footer-block space-y-2">
      <h6>Navigation</h6>
      <ul class="space-y-3">
        <li><NuxtLink to="/">Cases</NuxtLink></li>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/services">Contacts</NuxtLink></li>
        <li><NuxtLink to="/about">About us</NuxtLink></li>
      </ul>
    </nav>

    <nav class="xl:mt-0 mt-8 footer-block space-y-2">
      <h6>Services</h6>
      <ul class="space-y-2.5">
        <li><NuxtLink to="/development">Web development</NuxtLink></li>
        <li><NuxtLink to="/design">UI/UX</NuxtLink></li>
        <li><NuxtLink to="/advertising">Advertising</NuxtLink></li>
        <li><NuxtLink to="/crm">CRM & ERP</NuxtLink></li>
        <li><NuxtLink to="/ai">AI Integration</NuxtLink></li>
        <li><NuxtLink to="/bots">Telegram bots</NuxtLink></li>
      </ul>
    </nav>

    <section class="xl:mt-0 mt-8 footer-block space-y-4">
      <h6>Contacts</h6>
      <address class="space-y-4">
        <p class="flex">
          <img class="mr-2 cursor-pointer" src="/images/mail.svg" alt="mail">
          <a href="tel:+380 97 007 07 07">+380 97 007 07 07</a>
        </p>
        <p class="flex mb-5 cursor-pointer">
          <img class="mr-2 cursor-pointer" src="/images/phone.svg" alt="phone">
          <a href="mailto:somemail@gmail.com">somemail@gmail.com</a>
        </p>
        <div class="xl:mt-0 mt-8 flex space-x-6">
          <img class="cursor-pointer" src="/images/insta.png" alt="instagram">
          <img class="cursor-pointer" src="/images/in.png" alt="in">
          <img class="cursor-pointer" src="/images/telegram.png" alt="telegram">
        </div>
      </address>
    </section>
  </footer>


</template>

<style scoped>

</style>