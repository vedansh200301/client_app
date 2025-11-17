export const palette = {
  navy: '#2F4156',
  teal: '#567C8D',
  beige: '#F5EFEB',
  skyBlue: '#C8D9E6',
  white: '#FFFFFF',
  slate: '#8EA3B4',
};

export const theme = {
  colors: {
    background: palette.beige,
    surface: palette.white,
    card: palette.white,
    textPrimary: palette.navy,
    textSecondary: palette.teal,
    muted: palette.slate,
    border: '#E1E5EA',
    accent: palette.skyBlue,
    highlight: palette.teal,
    chipBackground: '#E8EDF2',
    mapBackground: palette.skyBlue,
    glassBorder: 'rgba(255, 255, 255, 0.65)',
    glassBackground: 'rgba(255, 255, 255, 0.25)',
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
