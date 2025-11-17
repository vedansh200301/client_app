import { View, Text, StyleSheet, Pressable } from 'react-native';
import { theme } from '../theme';
import { GlassCard } from './GlassCard';

type Props = {
  id?: string | null;
  counterpart?: string | null;
  product?: string | null;
  quantity?: string | null;
  status?: string | null;
  location?: string | null;
  price?: string | null;
  onPress?: () => void;
};

export const QuoteCard = ({ id, counterpart, product, quantity, status, location, price, onPress }: Props) => {
  const normalizedStatus = status?.replace('_', ' ') ?? 'pending';

  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <GlassCard style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.identifier}>{id ?? 'Q-—'}</Text>
          <Text style={[styles.badge, statusStyles[status ?? ''] || styles.defaultBadge]} numberOfLines={1}>
            {normalizedStatus}
          </Text>
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {counterpart ?? 'Counterpart TBD'}
        </Text>
        <Text style={styles.product} numberOfLines={1}>
          {product ?? 'Product TBD'} • Qty: {quantity ?? '—'}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {location ?? 'Location pending'}
        </Text>
        <Text style={styles.price}>{price ?? 'Awaiting pricing'}</Text>
      </GlassCard>
    </Pressable>
  );
};

const statusStyles: Record<string, any> = {
  PENDING: {
    backgroundColor: theme.colors.chipBackground,
    color: theme.colors.textSecondary,
  },
  COUNTER_SENT: {
    backgroundColor: theme.colors.accent,
    color: theme.colors.textPrimary,
  },
  ACCEPTED: {
    backgroundColor: '#8AC6A3',
    color: theme.colors.textPrimary,
  },
};

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  identifier: {
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.radius.pill,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  defaultBadge: {
    backgroundColor: theme.colors.muted,
    color: theme.colors.surface,
  },
  title: {
    marginTop: theme.spacing.xs,
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  product: {
    marginTop: 4,
    color: theme.colors.textSecondary,
  },
  location: {
    marginTop: 4,
    color: theme.colors.muted,
  },
  price: {
    marginTop: theme.spacing.sm,
    fontWeight: '700',
    color: theme.colors.textSecondary,
  },
});
