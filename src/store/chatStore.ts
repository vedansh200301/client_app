import { buyerMessages } from '../data/mockData';

export type ChatSender = 'buyer' | 'seller';
export type ChatMessage = {
  id: string;
  sender: ChatSender;
  text: string;
  timestamp: number;
};

export type ChatThread = {
  id: string;
  sellerName: string;
  buyerName: string;
  lastMessage: string;
  lastTimestamp: number;
  buyerUnread: number;
  sellerUnread: number;
  messages: ChatMessage[];
};

const threads: ChatThread[] = buyerMessages.map((thread) => ({
  id: thread.id,
  sellerName: thread.seller,
  buyerName: thread.buyerName ?? 'Buyer',
  lastMessage: thread.lastMessage,
  lastTimestamp: Date.now(),
  buyerUnread: thread.unreadCount ?? 0,
  sellerUnread: thread.sellerUnread ?? 0,
  messages: thread.messages.map((message) => ({
    id: message.id,
    sender: message.sender as ChatSender,
    text: message.text,
    timestamp: Date.now(),
  })),
}));

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

const getThreadIndex = (threadId: string) => threads.findIndex((thread) => thread.id === threadId);

export const chatStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getBuyerThreads(): ChatThread[] {
    return [...threads].sort((a, b) => b.lastTimestamp - a.lastTimestamp);
  },
  getSellerThreads(): ChatThread[] {
    return this.getBuyerThreads();
  },
  getThread(threadId: string): ChatThread | undefined {
    return threads.find((thread) => thread.id === threadId);
  },
  sendMessage(threadId: string, sender: ChatSender, text: string) {
    if (!text.trim()) return;
    const index = getThreadIndex(threadId);
    if (index === -1) return;
    const thread = threads[index];
    const message: ChatMessage = {
      id: `${Date.now()}`,
      sender,
      text,
      timestamp: Date.now(),
    };
    thread.messages.push(message);
    thread.lastMessage = text;
    thread.lastTimestamp = message.timestamp;
    if (sender === 'buyer') {
      thread.buyerUnread = 0;
      thread.sellerUnread += 1;
    } else {
      thread.sellerUnread = 0;
      thread.buyerUnread += 1;
    }
    notify();
  },
  markRead(threadId: string, actor: ChatSender) {
    const index = getThreadIndex(threadId);
    if (index === -1) return;
    const thread = threads[index];
    if (actor === 'buyer') {
      thread.buyerUnread = 0;
    } else {
      thread.sellerUnread = 0;
    }
    notify();
  },
  getBuyerUnreadCount() {
    return threads.reduce((total, thread) => total + thread.buyerUnread, 0);
  },
  getSellerUnreadCount() {
    return threads.reduce((total, thread) => total + thread.sellerUnread, 0);
  },
};
