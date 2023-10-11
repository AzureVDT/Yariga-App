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
                primaryText: "#11142d",
                grayf4: "#f4f4f4",
                grayfc: "#fcfcfc",
                gray80: "#808191",
                primary: "#475BE8",
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
export default config;
