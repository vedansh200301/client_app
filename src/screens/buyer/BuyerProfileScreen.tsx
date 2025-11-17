import React from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { buyerLocations } from '../../data/mockData';
import { theme } from '../../theme';

export const BuyerProfileScreen = () => {
  const locations = Array.isArray(buyerLocations) ? buyerLocations : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <GlassCard style={styles.card} contentStyle={{ padding: theme.spacing.lg }}>
        <Text style={styles.title}>Vedansh</Text>
        <Text style={styles.subtitle}>+91-98XXXXXX1 • vedansh@example.com</Text>
      </GlassCard>

      <GlassCard style={styles.card} contentStyle={{ padding: theme.spacing.lg }}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Locations</Text>
          <Pressable>
            <Text style={styles.link}>Add Location</Text>
          </Pressable>
        </View>
        {locations.length === 0 ? (
          <Text style={styles.emptyState}>No saved locations yet.</Text>
        ) : (
          locations.map((location) => (
            <View key={location.id} style={styles.locationRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.locationLabel} numberOfLines={1}>
                  {location.label}
                </Text>
                <Text style={styles.locationAddress} numberOfLines={1}>
                  {location.address}
                </Text>
              </View>
              {location.isDefault ? <Text style={styles.tag}>Default</Text> : null}
            </View>
          ))
        )}
      </GlassCard>

      <GlassButton label="Logout" variant="danger" style={styles.logoutButton} onPress={() => {}} />
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
  emptyState: {
    color: theme.colors.muted,
  },
  locationRow: {
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  locationLabel: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  locationAddress: {
    color: theme.colors.muted,
  },
  tag: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.accent,
    color: theme.colors.textPrimary,
    fontWeight: '700',
    fontSize: 12,
  },
  logoutButton: {
    alignSelf: 'center',
    marginTop: theme.spacing.lg,
  },
});
