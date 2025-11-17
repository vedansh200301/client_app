import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { GlassCard } from '../../components/GlassCard';
import { SellerStackParamList } from '../../navigation/types';
import { theme } from '../../theme';
import { chatStore, ChatThread } from '../../store/chatStore';

type Props = NativeStackScreenProps<SellerStackParamList, 'SellerChat'>;

const formatTime = (timestamp: number) => {
  const diff = Date.now() - timestamp;
  if (diff < 60000) return 'Just now';
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

export const SellerChatScreen = ({ route }: Props) => {
  const { quotationId } = route.params;
  const [thread, setThread] = useState<ChatThread | undefined>(chatStore.getThread(quotationId));
  const [input, setInput] = useState('');
  const scrollRef = useRef<ScrollView>(null);

  useFocusEffect(
    useCallback(() => {
      chatStore.markRead(quotationId, 'seller');
      const unsubscribe = chatStore.subscribe(() => {
        setThread(chatStore.getThread(quotationId));
        scrollRef.current?.scrollToEnd({ animated: true });
      });
      setThread(chatStore.getThread(quotationId));
      return unsubscribe;
    }, [quotationId]),
  );

  if (!thread) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Conversation unavailable.</Text>
      </View>
    );
  }

  const handleSend = () => {
    if (!input.trim()) return;
    chatStore.sendMessage(quotationId, 'seller', input.trim());
    setInput('');
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <GlassCard variant="ocean" style={styles.headerCard}>
        <Text style={styles.title}>{thread.buyerName}</Text>
        <View style={styles.headerMeta}>
          <Ionicons name="chatbubble-outline" size={16} color={theme.colors.sellerText} />
          <Text style={styles.metaText}>{thread.messages.length} messages</Text>
        </View>
      </GlassCard>
      <ScrollView style={styles.chatArea} contentContainerStyle={styles.chatContent} ref={scrollRef}>
        {thread.messages.map((message) => (
          <View
            key={message.id}
            style={[styles.bubble, message.sender === 'seller' ? styles.sellerBubble : styles.buyerBubble]}
          >
            <Text style={styles.bubbleText}>{message.text}</Text>
            <Text style={styles.bubbleTime}>{formatTime(message.timestamp)}</Text>
          </View>
        ))}
      </ScrollView>
      <GlassCard style={styles.inputCard}>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Respond to buyer"
            placeholderTextColor={theme.colors.muted}
            style={styles.input}
            value={input}
            onChangeText={setInput}
          />
          <GlassButton label="Send" onPress={handleSend} style={styles.sendButton} disabled={!input.trim()} />
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
    color: theme.colors.sellerText,
  },
  headerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xs,
  },
  metaText: {
    color: theme.colors.sellerText,
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
  sellerBubble: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.highlight,
  },
  buyerBubble: {
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
