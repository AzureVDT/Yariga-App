import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                grayf4: "#f4f4f4",
                grayfc: "#fcfcfc",
            },
            fontFamily: {
                primary: ["Manrope"],
            },
        },
    },
    plugins: [],
};
export default config;
