/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralGray: "#fbfbfb",
        primaryFont: "#1e1e1e",
        secondaryFont: "#8e8e8e",
        neutralGraySecond: "#f9f9f9",
        neutralGrayThird: "#d9d9d9",
        neutralGrayFourth: "#666666",
        primaryBlue: "#1F69BA",
        placeholder: "#B3B3B3",
      },
    },
  },
  plugins: [],
};
