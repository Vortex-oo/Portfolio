d.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1e2125",
            },
            fontFamily: {
                'bebas': ['"Bebas Neue"', 'cursive'],
                'custom': ['"YourCustomFont"', 'sans-serif'], // Add your custom font
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/mask.svg')",
            },
        },
    },
    plugins: [],
}