import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { theme } from '../theme';
import { BuyerHomeScreen } from '../screens/buyer/BuyerHomeScreen';
import { BuyerMessagesScreen } from '../screens/buyer/BuyerMessagesScreen';
import { BuyerProfileScreen } from '../screens/buyer/BuyerProfileScreen';
import { BuyerQuotationsScreen } from '../screens/buyer/BuyerQuotationsScreen';
import { BuyerQuotationDetailScreen } from '../screens/buyer/BuyerQuotationDetailScreen';
import { BuyerChatScreen } from '../screens/buyer/BuyerChatScreen';
import { BuyerSellerDetailScreen } from '../screens/buyer/BuyerSellerDetailScreen';
import { RoleSelectScreen } from '../screens/auth/RoleSelectScreen';
import { SellerHomeScreen } from '../screens/seller/SellerHomeScreen';
import { SellerInventoryScreen } from '../screens/seller/SellerInventoryScreen';
import { SellerLocationManagerScreen } from '../screens/seller/SellerLocationManagerScreen';
import { SellerProfileScreen } from '../screens/seller/SellerProfileScreen';
import { SellerQuotationDetailScreen } from '../screens/seller/SellerQuotationDetailScreen';
import { SellerQuotationsScreen } from '../screens/seller/SellerQuotationsScreen';
import { SellerMessagesScreen } from '../screens/seller/SellerMessagesScreen';
import { SellerChatScreen } from '../screens/seller/SellerChatScreen';
import {
  BuyerStackParamList,
  BuyerTabParamList,
  RootStackParamList,
  SellerStackParamList,
  SellerTabParamList,
} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const BuyerStack = createNativeStackNavigator<BuyerStackParamList>();
const SellerStack = createNativeStackNavigator<SellerStackParamList>();
const BuyerTab = createBottomTabNavigator<BuyerTabParamList>();
const SellerTab = createBottomTabNavigator<SellerTabParamList>();

const appNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.background,
    card: theme.colors.surface,
    text: theme.colors.textPrimary,
    border: theme.colors.border,
    primary: theme.colors.textSecondary,
  },
};

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  BuyerHome: 'home',
  BuyerQuotations: 'list',
  BuyerMessages: 'chatbubbles',
  BuyerProfile: 'person-circle',
  SellerHome: 'speedometer',
  SellerQuotations: 'chatbox',
  SellerMessages: 'chatbubbles',
  SellerInventory: 'cube',
  SellerProfile: 'business',
  SellerLocations: 'navigate-circle',
};

const BuyerTabsNavigator = () => (
  <BuyerTab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: theme.colors.tabActive,
      tabBarInactiveTintColor: theme.colors.tabInactive,
      tabBarStyle: {
        backgroundColor: theme.colors.tabBackground,
        borderTopColor: 'transparent',
      },
      tabBarLabelStyle: { fontWeight: '600' },
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={iconMap[route.name]} size={size} color={color} />
      ),
    })}
  >
    <BuyerTab.Screen name="BuyerHome" component={BuyerHomeScreen} options={{ title: 'Home' }} />
    <BuyerTab.Screen
      name="BuyerQuotations"
      component={BuyerQuotationsScreen}
      options={{ title: 'Quotations' }}
    />
    <BuyerTab.Screen
      name="BuyerMessages"
      component={BuyerMessagesScreen}
      options={{ title: 'Messages' }}
    />
    <BuyerTab.Screen name="BuyerProfile" component={BuyerProfileScreen} options={{ title: 'Profile' }} />
  </BuyerTab.Navigator>
);

const SellerTabsNavigator = () => (
  <SellerTab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: theme.colors.tabActive,
      tabBarInactiveTintColor: theme.colors.tabInactive,
      tabBarStyle: {
        backgroundColor: theme.colors.tabBackground,
        borderTopColor: 'transparent',
      },
      tabBarLabelStyle: { fontWeight: '600' },
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={iconMap[route.name]} size={size} color={color} />
      ),
    })}
  >
    <SellerTab.Screen
      name="SellerHome"
      component={SellerHomeScreen}
      options={{ title: 'Overview' }}
    />
    <SellerTab.Screen
      name="SellerQuotations"
      component={SellerQuotationsScreen}
      options={{ title: 'Quotations' }}
    />
    <SellerTab.Screen
      name="SellerMessages"
      component={SellerMessagesScreen}
      options={{ title: 'Chats' }}
    />
    <SellerTab.Screen
      name="SellerInventory"
      component={SellerInventoryScreen}
      options={{ title: 'Inventory' }}
    />
    <SellerTab.Screen name="SellerProfile" component={SellerProfileScreen} options={{ title: 'Profile' }} />
    <SellerTab.Screen
      name="SellerLocations"
      component={SellerLocationManagerScreen}
      options={{ title: 'Locations' }}
    />
  </SellerTab.Navigator>
);

const BuyerStackNavigator = () => (
  <BuyerStack.Navigator>
    <BuyerStack.Screen name="BuyerTabs" component={BuyerTabsNavigator} options={{ headerShown: false }} />
    <BuyerStack.Screen name="BuyerSellerDetail" component={BuyerSellerDetailScreen} options={{ title: 'Seller' }} />
    <BuyerStack.Screen
      name="BuyerQuotationDetail"
      component={BuyerQuotationDetailScreen}
      options={{ title: 'Quotation' }}
    />
    <BuyerStack.Screen name="BuyerChat" component={BuyerChatScreen} options={{ title: 'Chat' }} />
  </BuyerStack.Navigator>
);

const SellerStackNavigator = () => (
  <SellerStack.Navigator>
    <SellerStack.Screen name="SellerTabs" component={SellerTabsNavigator} options={{ headerShown: false }} />
    <SellerStack.Screen
      name="SellerQuotationDetail"
      component={SellerQuotationDetailScreen}
      options={{ title: 'Quotation' }}
    />
    <SellerStack.Screen name="SellerChat" component={SellerChatScreen} options={{ title: 'Chat' }} />
  </SellerStack.Navigator>
);

export const RootNavigator = () => (
  <NavigationContainer theme={appNavigationTheme}>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="RoleSelect" component={RoleSelectScreen} />
      <RootStack.Screen name="BuyerStack" component={BuyerStackNavigator} />
      <RootStack.Screen name="SellerStack" component={SellerStackNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);
