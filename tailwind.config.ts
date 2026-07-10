import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050510",
        surface: "#0f0f1f",
        fg: "#f5f5fa",
        muted: "#8a8aa0",
        "muted-2": "#5a5a75",
        "blue-bright": "#4d8aff",
        "purple-bright": "#c084fc",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        logo: ["var(--font-comfortaa)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        rotate: "rotate 8s linear infinite",
        floaty: "floaty 3s ease-in-out infinite",
        flowRight: "flowRight 3s linear infinite",
      },
      keyframes: {
        rotate: { to: { transform: "rotate(360deg)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        flowRight: {
          "0%": { left: "-40px", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
