import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  pages: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: '/',
  }
});
