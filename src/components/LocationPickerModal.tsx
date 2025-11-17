import React from 'react';
import { Modal, View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { buyerLocations } from '../data/mockData';

type LocationOption = typeof buyerLocations[number];

type Props = {
  visible: boolean;
  locations: LocationOption[];
  onSelect: (location: LocationOption) => void;
  onClose: () => void;
};

export const LocationPickerModal = ({ visible, locations, onSelect, onClose }: Props) => {
  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Choose Location</Text>
            <Pressable onPress={onClose} hitSlop={12}>
              <Text style={styles.close}>Close</Text>
            </Pressable>
          </View>
          <ScrollView>
            {locations.map((location) => (
              <Pressable key={location.id} style={styles.row} onPress={() => onSelect(location)}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>{location.label}</Text>
                  <Text style={styles.address}>{location.address}</Text>
                </View>
                {location.isDefault ? <Text style={styles.tag}>Default</Text> : null}
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'flex-end',
  },
  card: {
    maxHeight: '70%',
    backgroundColor: theme.colors.surface,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    padding: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: theme.colors.textPrimary,
  },
  close: {
    color: theme.colors.highlight,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  label: {
    color: theme.colors.textPrimary,
    fontWeight: '600',
  },
  address: {
    color: theme.colors.muted,
  },
  tag: {
    color: theme.colors.textSecondary,
    fontWeight: '700',
    marginLeft: theme.spacing.sm,
  },
});
