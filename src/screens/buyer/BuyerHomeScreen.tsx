import { Ionicons } from '@expo/vector-icons';
import * as ExpoLocation from 'expo-location';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native';
import { GlassButton } from '../../components/GlassButton';
import { InfoChip } from '../../components/InfoChip';
import { FilterDropdown, DropdownOption } from '../../components/FilterDropdown';
import { LocationPickerModal } from '../../components/LocationPickerModal';
import { MapSearchArea } from '../../components/MapSearchArea';
import { SectionHeader } from '../../components/SectionHeader';
import { SellerCard } from '../../components/SellerCard';
import { buyerLocations, sellersNearBuyer } from '../../data/mockData';
import { BuyerStackParamList } from '../../navigation/types';
import { theme } from '../../theme';

type Navigation = NavigationProp<BuyerStackParamList>;
type BuyerLocation = typeof buyerLocations[number];
type Seller = typeof sellersNearBuyer[number];

const categoryOptions: DropdownOption[] = [
  { label: 'All', value: 'ALL', icon: 'layers-outline' },
  { label: 'Cement', value: 'cement', icon: 'cube-outline', meta: { keyword: 'cement' } },
  { label: 'Steel', value: 'steel', icon: 'construct-outline', meta: { keyword: 'steel' } },
  { label: 'Aggregates', value: 'aggregates', icon: 'prism-outline', meta: { keyword: 'sand' } },
];

const priceOptions: DropdownOption[] = [
  { label: 'Any', value: 'ANY', icon: 'cash-outline' },
  { label: '₹0 - ₹500', value: '0-500', icon: 'cash-outline', meta: { min: 0, max: 500 } },
  { label: '₹500 - ₹1,000', value: '500-1000', icon: 'cash-outline', meta: { min: 500, max: 1000 } },
];

const distanceOptions: DropdownOption[] = [
  { label: 'Any', value: 'ANY', icon: 'navigate-outline' },
  { label: '5 km', value: '5', icon: 'navigate-outline' },
  { label: '10 km', value: '10', icon: 'navigate-outline' },
  { label: '25 km', value: '25', icon: 'navigate-outline' },
];

export const BuyerHomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryOption, setCategoryOption] = useState<DropdownOption>(categoryOptions[0]);
  const [priceOption, setPriceOption] = useState<DropdownOption>(priceOptions[0]);
  const [distanceOption, setDistanceOption] = useState<DropdownOption>(distanceOptions[0]);
  const [customLocation, setCustomLocation] = useState<BuyerLocation | null>(null);
  const [activeLocationId, setActiveLocationId] = useState<string>(
    buyerLocations.find((loc) => loc.isDefault)?.id ?? buyerLocations[0].id,
  );
  const [pickerVisible, setPickerVisible] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const availableLocations = useMemo(() => {
    const list = [...buyerLocations];
    if (customLocation) {
      list.push(customLocation);
    }
    return list;
  }, [customLocation]);

  const activeLocation = useMemo(() => {
    return availableLocations.find((loc) => loc.id === activeLocationId) ?? availableLocations[0];
  }, [activeLocationId, availableLocations]);

  const sellers = useMemo(() => {
    let collection: Seller[] = Array.isArray(sellersNearBuyer) ? sellersNearBuyer : [];
    if (searchQuery) {
      collection = collection.filter((seller) =>
        seller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seller.highlight.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    if (categoryOption.value !== 'ALL') {
      const keyword = categoryOption.meta?.keyword as string | undefined;
      if (keyword) {
        collection = collection.filter((seller) => seller.highlight.toLowerCase().includes(keyword));
      }
    }
    if (priceOption.value !== 'ANY') {
      const min = priceOption.meta?.min ?? 0;
      const max = priceOption.meta?.max ?? Number.MAX_VALUE;
      collection = collection.filter((seller) => {
        const numeric = parseFloat(seller.price.replace(/[^0-9.]/g, ''));
        return numeric >= min && numeric <= max;
      });
    }
    if (distanceOption.value !== 'ANY') {
      const maxDistance = parseFloat(distanceOption.value);
      collection = collection.filter((seller) => parseFloat(seller.distance) <= maxDistance);
    }
    return collection;
  }, [searchQuery, categoryOption, priceOption, distanceOption]);

  const handleUseCurrentLocation = async () => {
    try {
      setLocationLoading(true);
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location permission is required to fetch your position.');
        return;
      }
      const coords = await ExpoLocation.getCurrentPositionAsync({});
      const userLocation: BuyerLocation = {
        id: 'current-location',
        label: 'Current Location',
        address: 'Live coordinate',
        isDefault: false,
        lat: coords.coords.latitude,
        lng: coords.coords.longitude,
      };
      setCustomLocation(userLocation);
      setActiveLocationId(userLocation.id);
    } catch (error) {
      Alert.alert('Location error', 'Unable to fetch your current location.');
    } finally {
      setLocationLoading(false);
    }
  };

  const handleSellerPress = useCallback(
    (seller: Seller) => {
      navigation.navigate('BuyerSellerDetail', { sellerId: seller.id });
    },
    [navigation],
  );

  const handleQuotePress = useCallback((seller: Seller) => {
    Alert.alert('Quotation requested', `We will notify ${seller.name} about your interest.`);
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.locationRow}>
        <InfoChip
          label={activeLocation?.label ?? 'Set your location'}
          icon={<Ionicons name="location" size={16} color={theme.colors.textSecondary} />}
        />
        <Pressable onPress={() => setPickerVisible(true)}>
          <Text style={styles.changeText}>Change</Text>
        </Pressable>
      </View>

      <GlassButton
        label={locationLoading ? 'Detecting…' : 'Use Current Location'}
        onPress={handleUseCurrentLocation}
        disabled={locationLoading}
        style={styles.useLocationButton}
      />

      <View style={styles.searchSection}>
        <Text style={styles.label}>Search products</Text>
        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" color={theme.colors.textSecondary} size={18} />
          <TextInput
            placeholder="Cement, steel rods..."
            placeholderTextColor={theme.colors.muted}
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {locationLoading ? <ActivityIndicator size="small" color={theme.colors.textSecondary} /> : null}
        </View>
        <View style={styles.filterRow}>
          <FilterDropdown label="Category" selected={categoryOption} options={categoryOptions} onSelect={setCategoryOption} />
          <FilterDropdown label="Price" selected={priceOption} options={priceOptions} onSelect={setPriceOption} />
          <FilterDropdown label="Within" selected={distanceOption} options={distanceOptions} onSelect={setDistanceOption} />
        </View>
      </View>

      <SectionHeader title="Sellers near you" actionLabel="View map" onPressAction={() => {}} />

      {sellers.length === 0 ? (
        <Text style={styles.emptyState}>No sellers found for this location yet. Try expanding your radius.</Text>
      ) : (
        sellers.map((seller) => (
          <SellerCard
            key={seller.id}
            name={seller.name}
            distance={seller.distance}
            coverage={seller.coverage}
            highlight={seller.highlight}
            price={seller.price}
            availability={seller.availability}
            rating={seller.rating}
            onPress={() => handleSellerPress(seller)}
            onQuote={() => handleQuotePress(seller)}
          />
        ))
      )}

      <MapSearchArea activeLocation={activeLocation} sellers={sellers} />

      <LocationPickerModal
        visible={pickerVisible}
        locations={availableLocations}
        onSelect={(location) => {
          setActiveLocationId(location.id);
          setPickerVisible(false);
        }}
        onClose={() => setPickerVisible(false)}
      />
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
    paddingBottom: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 2.25,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changeText: {
    color: theme.colors.highlight,
    fontWeight: '600',
  },
  useLocationButton: {
    marginTop: theme.spacing.sm,
    alignSelf: 'flex-start',
  },
  searchSection: {
    marginTop: theme.spacing.lg,
  },
  label: {
    color: theme.colors.muted,
    marginBottom: theme.spacing.xs,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.md,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  searchInput: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    color: theme.colors.textPrimary,
  },
  filterRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  emptyState: {
    color: theme.colors.muted,
    marginBottom: theme.spacing.lg,
  },
});
