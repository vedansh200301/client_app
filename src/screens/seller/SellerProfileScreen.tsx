import React from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { buyerLocations } from '../../data/mockData';
import { theme } from '../../theme';

export const SellerProfileScreen = () => {
  const locations = Array.isArray(buyerLocations) ? buyerLocations : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <GlassCard style={styles.card} contentStyle={{ padding: theme.spacing.lg }}>
        <Text style={styles.title}>ABC Traders</Text>
        <Text style={styles.subtitle}>GSTIN: 22AAAA0000A1Z5</Text>
        <Text style={styles.subtitle}>Contact: +91-98XXXXXX1</Text>
      </GlassCard>

      <GlassCard style={styles.card} contentStyle={{ padding: theme.spacing.lg }}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Branches & Coverage</Text>
          <Pressable>
            <Text style={styles.link}>Add Location</Text>
          </Pressable>
        </View>
        {locations.map((location) => (
          <View key={location.id} style={styles.locationRow}>
            <View>
              <Text style={styles.locationLabel}>{location.label}</Text>
              <Text style={styles.locationAddress}>{location.address}</Text>
            </View>
            <Text style={styles.coverage}>Coverage: 25 km</Text>
          </View>
        ))}
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
    paddingTop: theme.spacing.xl,
  },
  card: {
    marginBottom: theme.spacing.md,
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
  sectionTitle: {
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  link: {
    color: theme.colors.highlight,
    fontWeight: '600',
  },
  locationRow: {
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  locationLabel: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  locationAddress: {
    color: theme.colors.muted,
  },
  coverage: {
    marginTop: theme.spacing.xs,
    color: theme.colors.textSecondary,
  },
});
