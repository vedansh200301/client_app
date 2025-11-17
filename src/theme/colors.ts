export const palette = {
  mint: '#80EE98',
  aqua: '#46DFB1',
  cyan: '#09D1C7',
  teal: '#15919B',
  deepTeal: '#0C6478',
  midnight: '#213A58',
  navyGlow: '#14223E',
  white: '#FFFFFF',
};

export const theme = {
  colors: {
    background: '#B8F2CC',
    surface: 'rgba(255,255,255,0.95)',
    card: 'rgba(255,255,255,0.9)',
    textPrimary: palette.midnight,
    textSecondary: palette.deepTeal,
    muted: '#1F6A7C',
    border: 'rgba(9, 209, 199, 0.2)',
    accent: palette.cyan,
    highlight: palette.aqua,
    chipBackground: 'rgba(9, 209, 199, 0.18)',
    mapBackground: palette.cyan,
    glassBorder: 'rgba(255, 255, 255, 0.8)',
    glassBackground: 'rgba(255, 255, 255, 0.35)',
    sellerSurface: 'rgba(21, 145, 155, 0.7)',
    sellerText: '#E0FBFF',
    tabBackground: palette.midnight,
    tabActive: palette.cyan,
    tabInactive: 'rgba(255,255,255,0.6)',
    badge: 'rgba(70, 223, 177, 0.25)',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 8,
    md: 16,
    pill: 999,
  },
  glass: {
    tint: 'light' as const,
    intensity: 35,
  },
};

export type Theme = typeof theme;
