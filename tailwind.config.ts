import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        pacifico: ["var(--font-pacifico)"],
        londrina: ["var(--font-londrina)"],
        pressStart2P: ["var(--font-press-start)"],
        play: ["var(--font-play)"]
      },
    },
  },
  plugins: [],
} satisfies Config;
