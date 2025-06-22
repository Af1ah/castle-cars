export const theme = {
  colors: {
    // Primary palette
    primary: {
      gold: "#D4AF37",
      goldLight: "#E6C757",
      goldDark: "#B8941F",
    },
    // Neutral palette
    neutral: {
      black: "#0A0A0A",
      matteBlack: "#1A1A1A",
      darkGray: "#2A2A2A",
      mediumGray: "#404040",
      lightGray: "#6B7280",
      silver: "#9CA3AF",
      white: "#FFFFFF",
    },
    // Semantic colors
    semantic: {
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
      info: "#3B82F6",
    },
    // Background variants
    background: {
      primary: "#0A0A0A",
      secondary: "#1A1A1A",
      tertiary: "#2A2A2A",
      overlay: "rgba(10, 10, 10, 0.8)",
      glass: "rgba(255, 255, 255, 0.05)",
    },
  },
  fonts: {
    heading: ["Poppins", "sans-serif"],
    body: ["Inter", "sans-serif"],
  },
  spacing: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
    "3xl": "6rem", // 96px
    "4xl": "8rem", // 128px
  },
  borderRadius: {
    sm: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  animation: {
    duration: {
      fast: "200ms",
      normal: "300ms",
      slow: "500ms",
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },
} as const

export type Theme = typeof theme
