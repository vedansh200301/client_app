import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { buyerLocations } from '../../data/mockData';
import { theme } from '../../theme';

export const SellerLocationManagerScreen = () => {
  const locations = Array.isArray(buyerLocations) ? buyerLocations : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {locations.map((location) => (
        <GlassCard key={location.id} style={styles.card}>
          <View>
            <Text style={styles.title}>{location.label}</Text>
            <Text style={styles.subtitle}>{location.address}</Text>
            <Text style={styles.coverage}>Coverage radius: 25 km</Text>
          </View>
          <View style={styles.actions}>
            <GlassButton label="Edit" onPress={() => {}} style={styles.button} />
            <GlassButton
              label="Deactivate"
              variant="secondary"
              onPress={() => {}}
              style={[styles.button, styles.lastButton]}
            />
          </View>
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
  card: {
    marginBottom: theme.spacing.md,
  },
  title: {
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  subtitle: {
    color: theme.colors.textSecondary,
  },
  coverage: {
    marginTop: theme.spacing.xs,
    color: theme.colors.muted,
  },
  actions: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  lastButton: {
    marginRight: 0,
  },
});
