import type { Config } from "tailwindcss";

export default <Config>{
    theme: {
        extend: {
            colors: {
                primary: "var(--blue)",
            },
        },
    },
    plugins: [],
    content: [
        './pages/**/*.{vue,js,ts}',
        './components/**/*.{vue,js,ts}',
    ]
};
