import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          "0%": { transform: "translateY(50px)" },
          "50%": { transform: "translateY(-70px)" },
          "100%": { transform: "translateY(20px)" },
        },
        birdin: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(500px)" },
        },
        textin: {
          "0%": { transform: "translateX(-700px)" },
          "100%": { transform: "translateX(-80px)" },
        },
      },
      animation: {
        "custom-bounce": "customBounce 2s  forwards ",
        "bird-in": "birdin 6s forwards",
        "text-in": "textin 6s forwards",
      },
    },
  },

  plugins: [require('daisyui'),require('flowbite/plugin'),],
};

export default config;
