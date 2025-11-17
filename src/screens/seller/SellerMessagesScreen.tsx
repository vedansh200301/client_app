import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { SellerStackParamList, SellerTabParamList } from '../../navigation/types';
import { theme } from '../../theme';
import { chatStore, ChatThread } from '../../store/chatStore';

type Navigation = CompositeNavigationProp<
  BottomTabNavigationProp<SellerTabParamList, 'SellerMessages'>,
  NativeStackNavigationProp<SellerStackParamList>
>;

export const SellerMessagesScreen = () => {
  const navigation = useNavigation<Navigation>();
  const [threads, setThreads] = useState<ChatThread[]>(chatStore.getSellerThreads());

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = chatStore.subscribe(() => setThreads(chatStore.getSellerThreads()));
      setThreads(chatStore.getSellerThreads());
      return unsubscribe;
    }, []),
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {threads.map((thread) => (
        <Pressable key={thread.id} onPress={() => navigation.navigate('SellerChat', { quotationId: thread.id })}>
          <GlassCard style={styles.card} variant="ocean">
            <View style={styles.headerRow}>
              <View style={styles.titleRow}>
                <Ionicons name="person-circle-outline" size={16} color={theme.colors.sellerText} />
                <Text style={styles.title} numberOfLines={1}>
                  {thread.buyerName}
                </Text>
              </View>
              {thread.sellerUnread ? (
                <View style={styles.unreadBadge}>
                  <Ionicons name="chatbubble-ellipses" size={14} color={theme.colors.surface} />
                  <Text style={styles.unreadText}>{thread.sellerUnread}</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.message} numberOfLines={2}>
              {thread.lastMessage}
            </Text>
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
    color: theme.colors.sellerText,
  },
  message: {
    color: theme.colors.sellerText,
    marginTop: theme.spacing.xs,
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
