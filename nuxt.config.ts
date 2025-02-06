import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  pages: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: '/Sites/ocean-script-text',
    // змінити, якщо сайт буде в підкаталозі
  }
});
