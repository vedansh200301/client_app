import React from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { sellerInventory } from '../../data/mockData';
import { theme } from '../../theme';

const locations = ['Main Yard', 'Warehouse - North'];

export const SellerInventoryScreen = () => {
  const [activeLocation, setActiveLocation] = React.useState(locations[0]);
  const inventory = Array.isArray(sellerInventory) ? sellerInventory : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.locationRow}>
        {locations.map((location) => (
          <Pressable
            key={location}
            style={[styles.locationChip, location === activeLocation && styles.locationChipActive]}
            onPress={() => setActiveLocation(location)}
          >
            <Text
              style={[
                styles.locationChipText,
                location === activeLocation && styles.locationChipTextActive,
              ]}
            >
              {location}
            </Text>
          </Pressable>
        ))}
      </View>

      <GlassButton
        label="Add Product"
        onPress={() => Alert.alert('Add Product', `Opening product form for ${activeLocation}`)}
        style={styles.addButton}
      />

      {inventory.length === 0 ? (
        <Text style={styles.emptyState}>No products configured for this location.</Text>
      ) : (
        inventory.map((item) => (
          <GlassCard key={item.sku} style={styles.inventoryCard} variant="ocean">
            <View style={styles.inventoryHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.productName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.meta} numberOfLines={1}>
                  {item.sku} • {item.status}
                </Text>
              </View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <View style={styles.inventoryMeta}>
              <Text style={styles.meta}>Stock: {item.stock}</Text>
              <Text style={styles.meta}>Min order: {item.min}</Text>
            </View>
          </GlassCard>
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
  locationRow: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
  },
  locationChip: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.chipBackground,
    marginRight: theme.spacing.sm,
  },
  locationChipActive: {
    backgroundColor: theme.colors.textSecondary,
  },
  locationChipText: {
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  locationChipTextActive: {
    color: theme.colors.surface,
  },
  addButton: {
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.lg,
  },
  emptyState: {
    color: theme.colors.muted,
  },
  inventoryCard: {
    marginBottom: theme.spacing.md,
  },
  inventoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  productName: {
    fontWeight: '600',
    color: theme.colors.sellerText,
  },
  meta: {
    color: theme.colors.sellerText,
  },
  price: {
    fontWeight: '700',
    color: '#B9FBFF',
  },
  inventoryMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.sm,
  },
});
