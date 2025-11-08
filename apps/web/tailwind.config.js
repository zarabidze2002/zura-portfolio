/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50:  "#f2fcf7",
                    100: "#e6f9ef",
                    200: "#c4eed8",
                    300: "#9ddfbf",
                    400: "#6ecfa1",
                    500: "#38b682",
                    600: "#2fa36b",
                    700: "#27875a",
                    800: "#216d4b",
                    900: "#1b573d"
                }
            },
            borderRadius: {
                "2xl": "1rem",
            },
            boxShadow: {
                soft: "0 4px 20px rgba(0,0,0,0.05)",
            },
        },
    },
    plugins: [],
};
