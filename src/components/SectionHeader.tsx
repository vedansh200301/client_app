import { View, Text, Pressable, StyleSheet } from 'react-native';
import { theme } from '../theme';

type Props = {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export const SectionHeader = ({ title, actionLabel, onPressAction }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? (
        <Pressable onPress={onPressAction} hitSlop={8}>
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  action: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.highlight,
  },
});
