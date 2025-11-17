import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { ProductCard } from '../../components/ProductCard';
import { SectionHeader } from '../../components/SectionHeader';
import { sellersNearBuyer } from '../../data/mockData';
import { BuyerStackParamList } from '../../navigation/types';
import { theme } from '../../theme';

type Props = NativeStackScreenProps<BuyerStackParamList, 'BuyerSellerDetail'>;

export const BuyerSellerDetailScreen = ({ route }: Props) => {
  const seller = sellersNearBuyer?.find((entry) => entry.id === route.params?.sellerId) ?? sellersNearBuyer?.[0];
  const inventory = seller?.products ?? [];

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
        <GlassButton
          label="View on Map"
          variant="secondary"
          style={styles.mapButton}
          onPress={() => Alert.alert('Map', 'Map view coming soon.')}
        />
      </GlassCard>

      <SectionHeader title="Inventory at this location" />
      {inventory.length === 0 ? (
        <GlassCard style={styles.productCard}>
          <Text style={styles.productName}>No catalog items yet</Text>
          <Text style={styles.productMeta}>Seller has not shared inventory.</Text>
        </GlassCard>
      ) : (
        inventory.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={`${item.price} / ${item.unit}`}
            availability={item.availability}
            minOrder={item.minOrder}
            imageUrl={item.imageUrl}
            onPress={() => Alert.alert('Quote', `Requested quote for ${item.name}`)}
          />
        ))
      )}
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
    paddingTop: theme.spacing.xl * 2.25,
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
    color: theme.colors.textSecondary,
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
