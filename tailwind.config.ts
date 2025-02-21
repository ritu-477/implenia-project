import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#EBA82C",
        "dark-red": "#FF132D",
        "light-black": "#1D1D1B",
        "light-white": "#F5F5F5",
        "light-yellow": "#FEBE32",
        "dark-yellow":"#F3B72C",
        "light-blue":"#009fe3",
        "light-gray":"#8F9090",
      },

      fontSize: {
        "custom-xs": "10px",
        "custom-sm": "21px",
        "custom-xsm": "35px",
        "custom-md": "49px",
        "custom-lg": "76px",
        "custom-xl": "80px",
        "custom-2xl": "100px",
      },

      fontFamily: {
        "roboto": "Roboto, sans-serif",
      },

      lineHeight: {
        "custom-sm": "105.26%",
        "custom-xsm": "125%",
        "custom-md": "125.7%",
        "custom-lg": "125.69%",
        "custom-xl": "125.71%",
        "custom-2xl": "128.57%",
      },
     
      backgroundImage: {
        "hero-bg": "url('/assets/images/webp/hero-bg.webp')",
      },

      backgroundPosition: {
        customRight: "0px ",
      },

      boxShadow: {
        heroShadow: "320px 0px 0px #fff inset",
        redShadow: "270px 0px 0px #FF132D inset",
        navBarShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;