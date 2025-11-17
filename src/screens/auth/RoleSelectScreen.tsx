import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { theme } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleSelect'>;

const roles = [
  {
    id: 'buyer',
    title: 'Buyer Dashboard',
    description: 'Discover location-aware supply, request quotations and negotiate via chat.',
    target: 'BuyerStack' as const,
  },
  {
    id: 'seller',
    title: 'Seller Dashboard',
    description: 'Manage coverage, inventory and respond to buyer quotations with context.',
    target: 'SellerStack' as const,
  },
];

export const RoleSelectScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Choose a dashboard to preview</Text>
      {roles.map((role) => (
        <Pressable key={role.id} style={styles.card} onPress={() => navigation.navigate(role.target)}>
          <Text style={styles.title}>{role.title}</Text>
          <Text style={styles.description}>{role.description}</Text>
          <Text style={styles.link}>Open {role.title.split(' ')[0]} View →</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  headline: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.md,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  description: {
    marginTop: theme.spacing.sm,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  link: {
    marginTop: theme.spacing.md,
    fontWeight: '700',
    color: theme.colors.highlight,
  },
});
