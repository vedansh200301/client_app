import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlassButton } from './GlassButton';
import { GlassCard } from './GlassCard';
import { theme } from '../theme';

type Props = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  availability?: string;
  minOrder?: string;
  onPress?: () => void;
};

export const ProductCard = ({ name, description, price, imageUrl, availability, minOrder, onPress }: Props) => (
  <GlassCard style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
    <View style={styles.content}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <View style={styles.metaRow}>
        <Ionicons name="pricetag-outline" size={14} color={theme.colors.highlight} />
        <Text style={styles.price}>{price}</Text>
      </View>
      {availability ? (
        <View style={styles.metaRow}>
          <Ionicons name="trending-up-outline" size={14} color={theme.colors.textSecondary} />
          <Text style={styles.meta}>{availability}</Text>
        </View>
      ) : null}
      {minOrder ? (
        <View style={styles.metaRow}>
          <Ionicons name="briefcase-outline" size={14} color={theme.colors.textSecondary} />
          <Text style={styles.meta}>Min order {minOrder}</Text>
        </View>
      ) : null}
      <GlassButton label="Request Quote" onPress={onPress} style={styles.button} />
    </View>
  </GlassCard>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.spacing.md,
  },
  image: {
    height: 160,
    width: '100%',
    borderRadius: theme.radius.md,
  },
  content: {
    marginTop: theme.spacing.sm,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  description: {
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xs,
  },
  price: {
    fontWeight: '700',
    color: theme.colors.highlight,
  },
  meta: {
    color: theme.colors.textSecondary,
  },
  button: {
    marginTop: theme.spacing.sm,
  },
});
