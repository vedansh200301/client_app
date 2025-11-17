import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { buyerQuotations } from '../../data/mockData';
import { theme } from '../../theme';

const sampleMessages = [
  { id: '1', author: 'You', message: 'Please confirm delivery timeline.', align: 'right' as const },
  { id: '2', author: 'Seller', message: 'We can deliver by Monday.', align: 'left' as const },
  { id: '3', author: 'You', message: 'Great, keeping price at ₹345 works.', align: 'right' as const },
];

export const BuyerQuotationDetailScreen = () => {
  const quotation = buyerQuotations?.[0];

  if (!quotation) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Quotation not found. Return to the list to pick another conversation.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <GlassCard style={styles.card} contentStyle={{ padding: theme.spacing.lg }}>
        <Text style={styles.caption}>{quotation.id}</Text>
        <Text style={styles.title}>Seller: {quotation.counterpart}</Text>
        <Text style={styles.subtitle}>{quotation.location} • 12 km away</Text>
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Product</Text>
            <Text style={styles.value}>{quotation.product}</Text>
          </View>
          <View>
            <Text style={styles.label}>Quantity</Text>
            <Text style={styles.value}>{quotation.quantity}</Text>
          </View>
        </View>
        <Text style={styles.status}>Status: {quotation.status}</Text>
        <View style={styles.actions}>
          <GlassButton label="Accept Counter" onPress={() => {}} style={styles.actionButton} />
          <GlassButton label="Reject" variant="secondary" onPress={() => {}} style={styles.actionButton} />
        </View>
      </GlassCard>

      <Text style={styles.chatTitle}>Chat</Text>
      <GlassCard style={styles.chatCard}>
        {sampleMessages.map((msg) => (
          <View
            key={msg.id}
            style={[styles.messageBubble, msg.align === 'right' ? styles.messageBuyer : styles.messageSeller]}
          >
            <Text style={styles.messageAuthor}>{msg.author}</Text>
            <Text style={styles.messageText}>{msg.message}</Text>
          </View>
        ))}
        <GlassButton label="AI Suggest Reply" variant="secondary" onPress={() => {}} style={styles.aiButton} />
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
  },
  caption: {
    color: theme.colors.muted,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginTop: theme.spacing.xs,
  },
  subtitle: {
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 12,
  },
  value: {
    color: theme.colors.textPrimary,
    fontWeight: '600',
  },
  status: {
    color: theme.colors.textSecondary,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
  },
  actionButton: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  chatTitle: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  chatCard: {
    marginTop: theme.spacing.sm,
  },
  messageBubble: {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
  },
  messageBuyer: {
    backgroundColor: theme.colors.accent,
    alignSelf: 'flex-end',
  },
  messageSeller: {
    backgroundColor: theme.colors.chipBackground,
    alignSelf: 'flex-start',
  },
  messageAuthor: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 4,
  },
  messageText: {
    color: theme.colors.textPrimary,
  },
  aiButton: {
    marginTop: theme.spacing.md,
    alignSelf: 'flex-end',
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
