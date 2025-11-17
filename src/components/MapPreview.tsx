import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { GlassCard } from './GlassCard';

type Props = {
  label?: string;
};

export const MapPreview = ({ label = 'Map Preview' }: Props) => (
  <GlassCard style={styles.card} contentStyle={styles.inner}>
    <View style={styles.grid}>
      <View style={[styles.circle, styles.primaryCircle]} />
      <View style={[styles.circle, styles.secondaryCircle]} />
      <View style={[styles.circle, styles.tertiaryCircle]} />
    </View>
    <Text style={styles.text}>{label}</Text>
  </GlassCard>
);

const styles = StyleSheet.create({
  card: {
    height: 180,
    marginTop: theme.spacing.lg,
  },
  inner: {
    flex: 1,
    borderRadius: theme.radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.colors.mapBackground,
  },
  grid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    borderRadius: theme.radius.pill,
  },
  primaryCircle: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(47,65,86,0.2)',
    top: 20,
    left: 40,
  },
  secondaryCircle: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(86,124,141,0.3)',
    bottom: 25,
    right: 50,
  },
  tertiaryCircle: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.4)',
    bottom: 40,
    left: 70,
  },
  text: {
    color: theme.colors.textPrimary,
    fontWeight: '700',
  },
});
