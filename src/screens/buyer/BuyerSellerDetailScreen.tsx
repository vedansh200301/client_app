import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { SectionHeader } from '../../components/SectionHeader';
import { sellersNearBuyer } from '../../data/mockData';
import { theme } from '../../theme';

const fallbackInventory = [
  { id: 'prod-1', name: 'OPC 53 Cement', meta: '₹350/bag • Min order 50' },
  { id: 'prod-2', name: 'River Sand', meta: '₹950/ton • Min order 10 tons' },
  { id: 'prod-3', name: 'TMT Bars 8mm', meta: '₹68/kg • Min order 1 ton' },
];

export const BuyerSellerDetailScreen = () => {
  const seller = sellersNearBuyer?.[0];
  const inventory = seller ? fallbackInventory : [];

  if (!seller) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Seller details unavailable. Please retry your search.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <GlassCard style={styles.header} contentStyle={{ padding: theme.spacing.lg }}>
        <Text style={styles.title} numberOfLines={1}>
          {seller.name}
        </Text>
        <Text style={styles.subtitle}>
          {seller.distance} km • Delivers within {seller.coverage} km
        </Text>
        <GlassButton label="View on Map" variant="secondary" style={styles.mapButton} />
      </GlassCard>

      <SectionHeader title="Inventory at this location" />
      {inventory.map((item) => (
        <GlassCard key={item.id} style={styles.productCard}>
          <View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productMeta}>{item.meta}</Text>
          </View>
          <GlassButton label="Quote" onPress={() => {}} style={styles.singleButton} />
        </GlassCard>
      ))}
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
    paddingTop: theme.spacing.xl,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    color: theme.colors.textSecondary,
  },
  mapButton: {
    marginTop: theme.spacing.md,
    alignSelf: 'flex-start',
  },
  productCard: {
    marginBottom: theme.spacing.sm,
  },
  productName: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  productMeta: {
    color: theme.colors.muted,
  },
  singleButton: {
    marginTop: theme.spacing.sm,
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
