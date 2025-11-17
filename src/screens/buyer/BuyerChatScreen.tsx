import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { buyerMessages } from '../../data/mockData';
import { BuyerStackParamList } from '../../navigation/types';
import { theme } from '../../theme';

type Props = NativeStackScreenProps<BuyerStackParamList, 'BuyerChat'>;

export const BuyerChatScreen = ({ route }: Props) => {
  const thread = buyerMessages.find((item) => item.id === route.params.threadId);

  if (!thread) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Conversation not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GlassCard style={styles.headerCard}>
        <Text style={styles.title}>{thread.seller}</Text>
        <View style={styles.headerMeta}>
          <Ionicons name="chatbubble-ellipses-outline" size={16} color={theme.colors.textSecondary} />
          <Text style={styles.metaText}>{thread.messages.length} messages</Text>
        </View>
      </GlassCard>
      <ScrollView style={styles.chatArea} contentContainerStyle={styles.chatContent}>
        {thread.messages.map((message) => (
          <View
            key={message.id}
            style={[styles.bubble, message.sender === 'buyer' ? styles.buyerBubble : styles.sellerBubble]}
          >
            <Text style={styles.bubbleText}>{message.text}</Text>
            <Text style={styles.bubbleTime}>{message.time}</Text>
          </View>
        ))}
      </ScrollView>
      <GlassCard style={styles.inputCard}>
        <View style={styles.inputRow}>
          <TextInput placeholder="Type a message" placeholderTextColor={theme.colors.muted} style={styles.input} />
          <GlassButton label="Send" style={styles.sendButton} />
        </View>
      </GlassCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl * 2.25,
  },
  headerCard: {
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  headerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xs,
  },
  metaText: {
    color: theme.colors.textSecondary,
  },
  chatArea: {
    flex: 1,
  },
  chatContent: {
    paddingBottom: theme.spacing.lg,
  },
  bubble: {
    maxWidth: '80%',
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
  },
  buyerBubble: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.highlight,
  },
  sellerBubble: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.chipBackground,
  },
  bubbleText: {
    color: theme.colors.textPrimary,
    fontWeight: '600',
  },
  bubbleTime: {
    color: theme.colors.textSecondary,
    fontSize: 11,
    marginTop: 4,
  },
  inputCard: {
    marginTop: theme.spacing.sm,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  input: {
    flex: 1,
    color: theme.colors.textPrimary,
  },
  sendButton: {
    minWidth: 90,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  emptyText: {
    color: theme.colors.muted,
  },
});
