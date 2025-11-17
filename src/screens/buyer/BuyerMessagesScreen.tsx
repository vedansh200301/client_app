import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { buyerMessages } from '../../data/mockData';
import { BuyerStackParamList } from '../../navigation/types';
import { theme } from '../../theme';

type Navigation = NavigationProp<BuyerStackParamList>;

export const BuyerMessagesScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {buyerMessages.map((thread) => (
        <Pressable key={thread.id} onPress={() => navigation.navigate('BuyerChat', { threadId: thread.id })}>
          <GlassCard style={styles.card}>
            <View style={styles.headerRow}>
              <View style={styles.titleRow}>
                <Ionicons name="business-outline" size={16} color={theme.colors.textSecondary} />
                <Text style={styles.title} numberOfLines={1}>
                  {thread.seller}
                </Text>
              </View>
              {thread.unreadCount ? (
                <View style={styles.unreadBadge}>
                  <Ionicons name="chatbubble-ellipses" size={14} color={theme.colors.surface} />
                  <Text style={styles.unreadText}>{thread.unreadCount}</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.message} numberOfLines={2}>
              {thread.lastMessage}
            </Text>
            <View style={styles.timeRow}>
              <Ionicons name="time-outline" size={14} color={theme.colors.muted} />
              <Text style={styles.timestamp}>{thread.timestamp}</Text>
            </View>
          </GlassCard>
        </Pressable>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  unreadBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.tabActive,
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
    borderRadius: theme.radius.pill,
    gap: 4,
  },
  unreadText: {
    color: theme.colors.surface,
    fontWeight: '700',
    fontSize: 12,
  },
});
