/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#080d18",
        navy: {
          950: "#0a1120",
          900: "#0f1729",
          850: "#141d33",
          800: "#1a2744",
        },
        accent: {
          DEFAULT: "#22d3ee",
          bright: "#67e8f9",
          glow: "rgba(34, 211, 238, 0.45)",
          dim: "rgba(34, 211, 238, 0.14)",
        },
        spark: {
          purple: "#c084fc",
          dim: "rgba(192, 132, 252, 0.14)",
        },
        warmth: {
          DEFAULT: "#fbbf24",
          dim: "rgba(251, 191, 36, 0.12)",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        lift: "0 24px 80px -20px rgba(0, 0, 0, 0.55)",
        ring: "0 0 0 1px rgba(148, 163, 184, 0.1)",
        glow: "0 0 48px -8px rgba(34, 211, 238, 0.35)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
