import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { QuoteCard } from '../../components/QuoteCard';
import { buyerQuotations } from '../../data/mockData';
import { BuyerStackParamList } from '../../navigation/types';
import { theme } from '../../theme';

type Navigation = NavigationProp<BuyerStackParamList>;

export const BuyerQuotationsScreen = () => {
  const navigation = useNavigation<Navigation>();
  const quotations = Array.isArray(buyerQuotations) ? buyerQuotations : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {quotations.length === 0 ? (
        <Text style={styles.emptyState}>No quotations yet. Create one from the Home tab.</Text>
      ) : (
        quotations.map((quote) => (
          <QuoteCard
            key={quote.id}
            {...quote}
            onPress={() => navigation.navigate('BuyerQuotationDetail', { quotationId: quote.id })}
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
    paddingTop: theme.spacing.xl * 2.25,
  },
  emptyState: {
    color: theme.colors.muted,
  },
});
