import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        code: [
          "Consolas",
          '"Andale Mono WT"',
          '"Andale Mono"',
          '"Lucida Console"',
          '"Lucida Sans Typewriter"',
          '"DejaVu Sans Mono"',
          '"Bitstream Vera Sans Mono"',
          '"Liberation Mono"',
          '"Nimbus Mono L"',
          "Monaco",
          '"Courier New"',
          "Courier",
          "monospace",
        ],
        heading: [
          '"var(--font-ginto-nord)"',
          '"var(--font-noto-sans)"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        primary: [
          '"var(--font-gg-sans)"',
          '"var(--font-noto-sans)"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
