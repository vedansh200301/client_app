import { ReactNode } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../theme';

type Props = {
  label: string;
  icon?: ReactNode;
};

export const InfoChip = ({ label, icon }: Props) => {
  return (
    <View style={styles.container}>
      {icon ? <View style={styles.icon}>{icon}</View> : null}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.chipBackground,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.pill,
  },
  icon: {
    marginRight: theme.spacing.xs,
  },
  label: {
    color: theme.colors.textSecondary,
    fontWeight: '600',
  },
});
