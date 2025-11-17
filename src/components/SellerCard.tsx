import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { GlassButton } from './GlassButton';
import { GlassCard } from './GlassCard';

type Props = {
  name?: string | null;
  distance?: string | null;
  coverage?: string | null;
  highlight?: string | null;
  price?: string | null;
  availability?: string | null;
  onPress?: () => void;
  onQuote?: () => void;
};

export const SellerCard = ({
  name,
  distance,
  coverage,
  highlight,
  price,
  availability,
  onPress,
  onQuote,
}: Props) => {
  const safeName = name?.trim() || 'Unknown Seller';
  const safeDistance = distance ? `${distance} km` : 'N/A';
  const safeCoverage = coverage ? `Delivers within ${coverage} km` : 'Coverage unavailable';
  const safeHighlight = highlight || 'Inventory info pending';
  const safePrice = price || 'Price TBD';
  const safeAvailability = availability || 'Availability unknown';

  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {safeName}
        </Text>
        <Text style={styles.distance}>{safeDistance}</Text>
      </View>
      <Text style={styles.coverage} numberOfLines={1}>
        {safeCoverage}
      </Text>
      <View style={styles.highlightRow}>
        <Text style={styles.highlight} numberOfLines={1}>
          {safeHighlight}
        </Text>
        <Text style={styles.price}>{safePrice}</Text>
      </View>
      <Text style={styles.availability} numberOfLines={1}>
        {safeAvailability}
      </Text>
      <View style={styles.actions}>
        <GlassButton label="View" variant="secondary" onPress={onPress} style={styles.flexButton} />
        <GlassButton label="Get Quote" onPress={onQuote} style={styles.flexButton} />
      </View>
    </GlassCard>
  );
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
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  distance: {
    color: theme.colors.textSecondary,
    fontWeight: '600',
  },
  coverage: {
    marginTop: theme.spacing.xs,
    color: theme.colors.muted,
  },
  highlightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.sm,
  },
  highlight: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  price: {
    fontWeight: '700',
    color: theme.colors.highlight,
  },
  availability: {
    marginTop: theme.spacing.xs,
    color: theme.colors.textSecondary,
  },
  actions: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
    justifyContent: 'space-between',
  },
  flexButton: {
    flex: 1,
    marginHorizontal: theme.spacing.xs,
  },
});
