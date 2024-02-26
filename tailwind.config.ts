import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      "colors": {
        "Text": "#e7e8ee",
        "Primary": "#9ca0cd",
        "Background": "#09090e",
        "Secondary": "#333a7a",
        "Accent": "#5b65c7"
       },
       "borderRadius": {
        "none": "0",
        "xs": "1rem"
       },
       padding:{
        '4.5': '1.125rem'
       }
    },
  },
  plugins: [],
};
export default config;
