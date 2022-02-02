import { createTheme } from "@nextui-org/react";

const light = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primary: "#4ADE7B",
      primaryDark: "$green600",
      secondary: "rgba(0, 0, 0, 0.1)",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#4ADE7B",
      background: "#fff",
      text: "#010101",
    },
  },
});

const dark = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primary: "#4ADE7B",
      primaryDark: "$green600",
      secondary: "rgba(255, 255, 255, 0.1)",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",

      link: "#4ADE7B",
      background: "#010101",
      text: "#fff",
    },
  },
});

export const themes = { light, dark };
