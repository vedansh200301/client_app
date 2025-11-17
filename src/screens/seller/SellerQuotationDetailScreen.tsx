import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { sellerQuotations } from '../../data/mockData';
import { theme } from '../../theme';

export const SellerQuotationDetailScreen = () => {
  const quote = sellerQuotations?.[0];

  if (!quote) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Quotation unavailable. Refresh the list and try again.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <GlassCard style={styles.card} contentStyle={{ padding: theme.spacing.lg }}>
        <Text style={styles.caption}>{quote.id}</Text>
        <Text style={styles.title}>Buyer: {quote.buyer}</Text>
        <Text style={styles.subtitle}>Buyer Location: {quote.location}</Text>
        <Text style={styles.subtitle}>Distance: 12 km</Text>

        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Product</Text>
            <Text style={styles.value}>{quote.product}</Text>
          </View>
          <View>
            <Text style={styles.label}>Qty</Text>
            <Text style={styles.value}>{quote.quantity}</Text>
          </View>
        </View>

        <Text style={styles.label}>Buyer Offer</Text>
        <Text style={styles.value}>{quote.price}</Text>

        <Text style={[styles.label, { marginTop: theme.spacing.md }]}>Fulfil from</Text>
        <GlassButton label="Main Yard" variant="secondary" onPress={() => {}} style={styles.dropdownReplacement} />

        <View style={styles.actions}>
          <GlassButton label="Accept" variant="primary" style={styles.actionButton} onPress={() => {}} />
          <GlassButton label="Reject" variant="secondary" style={styles.actionButton} onPress={() => {}} />
          <GlassButton label="Counter" variant="danger" style={styles.actionButton} onPress={() => {}} />
        </View>
      </GlassCard>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5,
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  caption: {
    color: theme.colors.muted,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginTop: theme.spacing.xs,
  },
  subtitle: {
    color: theme.colors.textSecondary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.md,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 12,
  },
  value: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  dropdownReplacement: {
    alignSelf: 'flex-start',
    marginTop: theme.spacing.xs,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.lg,
  },
  actionButton: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  emptyText: {
    color: theme.colors.muted,
    textAlign: 'center',
  },
});
