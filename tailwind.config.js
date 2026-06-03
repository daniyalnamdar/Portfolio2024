/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#070a12",
        panel: "#0d121f",
        ink: "#121826",
        accent: {
          DEFAULT: "#2ee6a8",
          mute: "#1fa876",
          bright: "#6effca",
          glow: "rgba(46, 230, 168, 0.35)",
          dim: "rgba(46, 230, 168, 0.12)",
        },
        signal: {
          DEFAULT: "#6366f1",
          dim: "rgba(99, 102, 241, 0.2)",
        },
        amber: {
          wire: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        display: ['"Syne"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 28px 90px -36px rgba(0, 0, 0, 0.65)",
        dock: "0 18px 60px -24px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "preloader-orbit": {
          to: { transform: "rotate(360deg)" },
        },
        "preloader-bar": {
          "0%": { transform: "translateX(-120%)", opacity: "0.5" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(320%)", opacity: "0.5" },
        },
        "modal-backdrop-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "modal-panel-in": {
          from: { opacity: "0", transform: "translateY(16px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "preloader-orbit": "preloader-orbit 2.4s linear infinite",
        "preloader-bar": "preloader-bar 1.1s ease-in-out infinite",
        "modal-backdrop-in": "modal-backdrop-in 0.35s ease-out",
        "modal-panel-in": "modal-panel-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
