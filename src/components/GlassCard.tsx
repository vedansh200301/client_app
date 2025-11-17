import { BlurView } from 'expo-blur';
import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { theme } from '../theme';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  intensity?: number;
  contentStyle?: StyleProp<ViewStyle>;
};

export const GlassCard = ({ children, style, intensity, contentStyle }: Props) => (
  <View style={[styles.wrapper, style]}>
    <BlurView
      style={styles.blur}
      intensity={intensity ?? theme.glass.intensity}
      tint={theme.glass.tint}
      experimentalBlurMethod="dimezisBlurView"
    >
      <View style={[styles.content, contentStyle]}>{children}</View>
    </BlurView>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: theme.radius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    backgroundColor: theme.colors.glassBackground,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  blur: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.md,
  },
});
