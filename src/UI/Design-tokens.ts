export const NEXUS_DESIGN_TOKENS = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px"
  },

  radius: {
    sm: "8px",
    md: "14px",
    lg: "20px",
    xl: "28px"
  },

  typography: {
    display:
      "clamp(2.5rem, 5vw, 5rem)",

    heading:
      "clamp(1.5rem, 3vw, 2.5rem)",

    body:
      "1rem",

    small:
      "0.8125rem"
  },

  motion: {
    fast:
      "140ms",

    normal:
      "240ms",

    slow:
      "500ms"
  },

  layout: {
    maxWidth:
      "1600px",

    sidebar:
      "280px",

    commandBar:
      "72px"
  }
} as const;
