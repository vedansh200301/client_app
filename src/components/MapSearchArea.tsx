import MapView, { Marker } from 'react-native-maps';
import React, { useMemo, useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { theme } from '../theme';
import { GlassButton } from './GlassButton';
import { sellersNearBuyer, buyerLocations } from '../data/mockData';

type Seller = typeof sellersNearBuyer[number];
type BuyerLocation = typeof buyerLocations[number];

type Props = {
  activeLocation?: BuyerLocation;
  sellers: Seller[];
};

const fallbackRegion = {
  latitude: 28.6139,
  longitude: 77.209,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

export const MapSearchArea = ({ activeLocation, sellers }: Props) => {
  const initialRegion = useMemo(() => {
    if (!activeLocation) return fallbackRegion;
    return {
      latitude: activeLocation.lat,
      longitude: activeLocation.lng,
      latitudeDelta: 0.08,
      longitudeDelta: 0.08,
    };
  }, [activeLocation]);

  const [region, setRegion] = useState(initialRegion);
  const [dirty, setDirty] = useState(false);

  const onRegionChangeComplete = (nextRegion: typeof region) => {
    setRegion(nextRegion);
    setDirty(true);
  };

  const handleSearch = () => {
    setDirty(false);
    Alert.alert('Search updated', `Searching sellers around ${region.latitude.toFixed(3)}, ${region.longitude.toFixed(3)}`);
  };

  useEffect(() => {
    setRegion(initialRegion);
    setDirty(false);
  }, [initialRegion]);

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={initialRegion}
        region={region}
        onRegionChangeComplete={onRegionChangeComplete}
        scrollEnabled
        zoomTapEnabled
      >
        {activeLocation ? (
          <Marker coordinate={{ latitude: activeLocation.lat, longitude: activeLocation.lng }} title={activeLocation.label} />
        ) : null}
        {sellers.map(
          (seller) =>
            seller.lat && seller.lng ? (
              <Marker
                key={seller.id}
                coordinate={{ latitude: Number(seller.lat), longitude: Number(seller.lng) }}
                title={seller.name}
                description={seller.highlight}
                pinColor={theme.colors.textSecondary}
              />
            ) : null,
        )}
      </MapView>
      {dirty ? (
        <GlassButton label="Search this area" onPress={handleSearch} style={styles.searchButton} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    marginTop: theme.spacing.lg,
    borderRadius: theme.radius.md,
    overflow: 'hidden',
  },
  searchButton: {
    position: 'absolute',
    top: theme.spacing.md,
    alignSelf: 'center',
  },
});
