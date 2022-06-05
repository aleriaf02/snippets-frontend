module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],

  theme: {
    fontFamily: {
      aqum: ["Aqum", "Arial"],
    },
    extend: {
      colors: {
        "black-palette": "#16161a",
        "lilac-palette": "#7f5af0",
        "white-palette": "#fffffe",
        "green-palette": "#2cb67d",

        "lical-slate-palette": "#4B3885",
        "green-slate-palette": "#319f71",
        "gray-slate-palette": "#515153",
        "white-slate-palette": "#dedede",

        "lilac-light-palette": "#BFADF7",
        "green-light-palette": "#2cb67d",
        "gray-light-palette": "#C5C5C5",

        "gray-code-palette": "#4d4d4d",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["dark"],
  },
};
