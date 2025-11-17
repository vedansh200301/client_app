import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { SectionHeader } from '../../components/SectionHeader';
import { StatCard } from '../../components/StatCard';
import { sellerActivities, sellerStats } from '../../data/mockData';
import { theme } from '../../theme';

export const SellerHomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Overview" />
      <View style={styles.statsRow}>
        {sellerStats.map((stat, index) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            variant="ocean"
            style={{ flex: 1, marginRight: index !== sellerStats.length - 1 ? theme.spacing.md : 0 }}
          />
        ))}
      </View>

      <GlassCard style={styles.card} variant="ocean">
        <SectionHeader title="Recent Activity" actionLabel="View all" />
        {sellerActivities.map((activity) => (
          <View key={activity} style={styles.activityRow}>
            <View style={styles.bullet} />
            <Text style={styles.activityText}>{activity}</Text>
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
    paddingTop: theme.spacing.xl * 2.25,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.lg,
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.tabActive,
    marginRight: theme.spacing.sm,
  },
  activityText: {
    flex: 1,
    color: theme.colors.sellerText,
  },
});
