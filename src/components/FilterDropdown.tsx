import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { theme } from '../theme';

export type DropdownOption = {
  label: string;
  value: string;
  icon?: keyof typeof Ionicons.glyphMap;
  meta?: Record<string, any>;
};

type Props = {
  label: string;
  selected: DropdownOption;
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
};

export const FilterDropdown = ({ label, selected, options, onSelect }: Props) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (option: DropdownOption) => {
    onSelect(option);
    setVisible(false);
  };

  return (
    <>
      <Pressable style={styles.chip} onPress={() => setVisible(true)}>
        <Text style={styles.chipLabel} numberOfLines={1}>
          {label}: {selected.label}
        </Text>
        <Ionicons name="chevron-down" size={16} color={theme.colors.textSecondary} />
      </Pressable>
      <Modal transparent visible={visible} animationType="fade" onRequestClose={() => setVisible(false)}>
        <View style={styles.overlay}>
          <Pressable style={styles.backdrop} onPress={() => setVisible(false)} />
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Select {label}</Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  style={[styles.optionRow, item.value === selected.value && styles.optionSelected]}
                  onPress={() => handleSelect(item)}
                >
                  <View style={styles.optionContent}>
                    {item.icon ? <Ionicons name={item.icon} size={18} color={theme.colors.textSecondary} /> : null}
                    <Text style={styles.optionLabel}>{item.label}</Text>
                  </View>
                  {item.value === selected.value ? (
                    <Ionicons name="checkmark-circle" size={18} color={theme.colors.highlight} />
                  ) : null}
                </Pressable>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  chipLabel: {
    marginRight: theme.spacing.xs,
    color: theme.colors.textSecondary,
    fontWeight: '600',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.lg,
  },
  modalTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  optionSelected: {
    backgroundColor: theme.colors.chipBackground,
    borderRadius: theme.radius.sm,
    paddingHorizontal: theme.spacing.sm,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  optionLabel: {
    color: theme.colors.textPrimary,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
  },
});
