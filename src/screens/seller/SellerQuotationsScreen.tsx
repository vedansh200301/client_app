import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { QuoteCard } from '../../components/QuoteCard';
import { sellerQuotations } from '../../data/mockData';
import { theme } from '../../theme';

export const SellerQuotationsScreen = () => {
  const quotations = Array.isArray(sellerQuotations) ? sellerQuotations : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {quotations.length === 0 ? (
        <Text style={styles.emptyState}>No buyer requests right now.</Text>
      ) : (
        quotations.map((quote) => (
          <QuoteCard
            key={quote.id}
            id={quote.id}
            counterpart={quote.buyer}
            product={quote.product}
            quantity={quote.quantity}
            status={quote.status}
            location={quote.location}
            price={quote.price}
          />
        ))
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
