/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryText: "#11142d",
                grayf4: "#f4f4f4",
                grayfc: "#fcfcfc",
                gray80: "#808191",
                primary: "#475BE8",
                secondary: "#DADEFA",
            },
            fontFamily: {
                primary: ["Manrope"],
            },
            spacing: {
                c10: "10px",
            },
        },
    },
    plugins: [],
};
