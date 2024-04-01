/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_color: "#F4DBF9",
        secondary_color: "#E2DBFC",
        black_color: "#000",
        white_color: "#fff",
        pending_color: "#8C8B90",
        btn_color: "#25689C",
        input_bg: "#DADAD9",
        card_head_pending: "#8C8B90",
        card_head_progress: "#E89922",
        card_head_completed: "#42A81E",
        card_head_deployed: "#353976",
        card_head_differed: "#F68871",
        prev_card_bg: "#F3F1F2",
        hr_color: "#EDEBEC",
      },
    },

    screens: {
      sm: "500px",
      md: "768px",
      lg: "1100px",
      xl: "1400px",
    },
  },
  plugins: [],
});
