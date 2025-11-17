import React from 'react';
import { Pressable, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { theme } from '../theme';

type Variant = 'primary' | 'secondary' | 'danger';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const variantStyles: Record<Variant, { background: string; textColor: string; borderColor?: string }> = {
  primary: {
    background: 'rgba(86, 124, 141, 0.65)',
    textColor: theme.colors.surface,
  },
  secondary: {
    background: 'rgba(255, 255, 255, 0.2)',
    textColor: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
  },
  danger: {
    background: 'rgba(255, 99, 99, 0.35)',
    textColor: theme.colors.textPrimary,
  },
};

export const GlassButton = ({ label, onPress, variant = 'primary', style, disabled }: Props) => {
  const palette = variantStyles[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: palette.background,
          borderColor: palette.borderColor ?? 'transparent',
          opacity: disabled ? 0.4 : pressed ? 0.85 : 1,
        },
        style,
      ]}
    >
      <Text style={[styles.label, { color: palette.textColor }]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    minWidth: 120,
    paddingHorizontal: theme.spacing.lg,
  },
  label: {
    fontWeight: '700',
  },
});
