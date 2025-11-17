import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { buyerMessages } from '../../data/mockData';
import { theme } from '../../theme';

export const BuyerMessagesScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {buyerMessages.map((thread) => (
        <GlassCard key={thread.id} style={styles.card}>
          <Text style={styles.title} numberOfLines={1}>
            {thread.seller}
          </Text>
          <Text style={styles.message} numberOfLines={2}>
            {thread.lastMessage}
          </Text>
          <Text style={styles.timestamp}>{thread.timestamp}</Text>
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
    paddingTop: theme.spacing.xl * 1.5,
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  title: {
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  message: {
    color: theme.colors.textSecondary,
  },
  timestamp: {
    marginTop: theme.spacing.xs,
    color: theme.colors.muted,
    fontSize: 12,
  },
});
