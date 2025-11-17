import { Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { theme } from '../theme';
import { GlassCard } from './GlassCard';

type Props = {
  label?: string;
  value?: string;
  subtext?: string;
  style?: StyleProp<ViewStyle>;
  variant?: 'light' | 'ocean';
};

export const StatCard = ({ label, value, subtext, style, variant = 'light' }: Props) => (
  <GlassCard style={[styles.card, style]} variant={variant}>
    <Text style={[styles.label, variant === 'ocean' && styles.labelOcean]} numberOfLines={1}>
      {label ?? '—'}
    </Text>
    <Text style={[styles.value, variant === 'ocean' && styles.valueOcean]} numberOfLines={1}>
      {value ?? '0'}
    </Text>
    {subtext ? (
      <Text style={[styles.subtext, variant === 'ocean' && styles.valueOcean]} numberOfLines={1}>
        {subtext}
      </Text>
    ) : null}
  </GlassCard>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.spacing.md,
  },
  label: {
    fontSize: 13,
    color: theme.colors.muted,
    marginBottom: theme.spacing.xs,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  subtext: {
    marginTop: theme.spacing.xs,
    color: theme.colors.textSecondary,
    fontSize: 12,
  },
  labelOcean: {
    color: theme.colors.sellerText,
  },
  valueOcean: {
    color: theme.colors.sellerText,
  },
});
