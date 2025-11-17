import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { QuoteCard } from '../../components/QuoteCard';
import { buyerQuotations } from '../../data/mockData';
import { theme } from '../../theme';

export const BuyerQuotationsScreen = () => {
  const quotations = Array.isArray(buyerQuotations) ? buyerQuotations : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {quotations.length === 0 ? (
        <Text style={styles.emptyState}>No quotations yet. Create one from the Home tab.</Text>
      ) : (
        quotations.map((quote) => <QuoteCard key={quote.id} {...quote} />)
      )}
      <View style={{ height: theme.spacing.lg }} />
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
  emptyState: {
    color: theme.colors.muted,
  },
});
