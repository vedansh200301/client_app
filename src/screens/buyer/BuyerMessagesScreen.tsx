import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { buyerMessages } from '../../data/mockData';
import { theme } from '../../theme';

export const BuyerMessagesScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {buyerMessages.map((thread) => (
        <GlassCard key={thread.id} style={styles.card}>
          <View style={styles.titleRow}>
            <Ionicons name="business-outline" size={16} color={theme.colors.textSecondary} />
            <Text style={styles.title} numberOfLines={1}>
              {thread.seller}
            </Text>
          </View>
          <Text style={styles.message} numberOfLines={2}>
            {thread.lastMessage}
          </Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={14} color={theme.colors.muted} />
            <Text style={styles.timestamp}>{thread.timestamp}</Text>
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
    paddingBottom: theme.spacing.lg,
    paddingTop: theme.spacing.xl * 2.25,
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  title: {
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  message: {
    color: theme.colors.textSecondary,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xs,
  },
  timestamp: {
    color: theme.colors.muted,
    fontSize: 12,
  },
});
