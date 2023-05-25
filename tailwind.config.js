/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff14c4",

          secondary: "#d36394",

          accent: "#f7e2aa",

          neutral: "#18222A",

          "base-100": "#DDE5EE",

          info: "#426BF0",

          success: "#4EDFA7",

          warning: "#F1AB13",

          error: "#E85959",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
