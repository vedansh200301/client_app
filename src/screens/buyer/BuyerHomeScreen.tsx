import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { InfoChip } from '../../components/InfoChip';
import { MapPreview } from '../../components/MapPreview';
import { SectionHeader } from '../../components/SectionHeader';
import { SellerCard } from '../../components/SellerCard';
import { buyerLocations, sellersNearBuyer } from '../../data/mockData';
import { BuyerStackParamList } from '../../navigation/types';
import { theme } from '../../theme';

type Navigation = NavigationProp<BuyerStackParamList>;

export const BuyerHomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const activeLocation = buyerLocations?.find((loc) => loc.isDefault) ?? buyerLocations?.[0];
  const sellers = Array.isArray(sellersNearBuyer) ? sellersNearBuyer : [];
  const hasSellers = sellers.length > 0;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.locationRow}>
        <InfoChip
          label={activeLocation?.label ?? 'Set your location'}
          icon={<Ionicons name="location" size={16} color={theme.colors.textSecondary} />}
        />
        <Pressable>
          <Text style={styles.changeText}>Change</Text>
        </Pressable>
      </View>

      <View style={styles.searchSection}>
        <Text style={styles.label}>Search products</Text>
        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" color={theme.colors.textSecondary} size={18} />
          <TextInput
            placeholder="Cement, steel rods..."
            placeholderTextColor={theme.colors.muted}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.filterRow}>
          {['Category', 'Price', 'Distance'].map((filter) => (
            <View key={filter} style={styles.filterChip}>
              <Text style={styles.filterText}>{filter}</Text>
              <Ionicons name="chevron-down" size={16} color={theme.colors.textSecondary} />
            </View>
          ))}
        </View>
      </View>

      <SectionHeader title="Sellers near you" actionLabel="View map" />

      {!hasSellers ? (
        <Text style={styles.emptyState}>No sellers found for this location yet. Try expanding your radius.</Text>
      ) : (
        sellers.map((seller) => (
          <SellerCard
            key={seller.id}
            name={seller.name}
            distance={seller.distance}
            coverage={seller.coverage}
            highlight={seller.highlight}
            price={seller.price}
            availability={seller.availability}
            onPress={() => navigation.navigate('BuyerSellerDetail')}
            onQuote={() => navigation.navigate('BuyerQuotationDetail')}
          />
        ))
      )}

      <MapPreview label="Search this area" />
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
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changeText: {
    color: theme.colors.highlight,
    fontWeight: '600',
  },
  searchSection: {
    marginTop: theme.spacing.lg,
  },
  label: {
    color: theme.colors.muted,
    marginBottom: theme.spacing.xs,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.md,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  searchInput: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    color: theme.colors.textPrimary,
  },
  filterRow: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    marginRight: theme.spacing.sm,
  },
  filterText: {
    marginRight: theme.spacing.xs,
    color: theme.colors.textSecondary,
    fontWeight: '600',
  },
  emptyState: {
    color: theme.colors.muted,
    marginBottom: theme.spacing.lg,
  },
});
