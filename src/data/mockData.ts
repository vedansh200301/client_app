export type LatLng = { lat: number; lng: number };

export type SellerProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  unit: string;
  availability: string;
  minOrder: string;
  imageUrl: string;
};

export const buyerLocations = [
  { id: 'loc-1', label: 'Site A - Gurgaon', address: 'Gurgaon, Haryana', isDefault: true, lat: 28.4595, lng: 77.0266 },
  { id: 'loc-2', label: 'Warehouse - Noida', address: 'Sector 62, Noida', isDefault: false, lat: 28.6273, lng: 77.3649 },
];

export const sellersNearBuyer = [
  {
    id: 'seller-1',
    name: 'ABC Traders',
    distance: '2.3',
    coverage: '25',
    highlight: 'OPC 53 Cement',
    price: '₹350/bag',
    availability: 'In stock • Min order 50',
    lat: 28.467,
    lng: 77.047,
    rating: 4.8,
    products: [
      {
        id: 'prod-cement-1',
        name: 'OPC 53 Cement Premium',
        description: 'High strength cement ideal for RCC and commercial projects.',
        price: '₹350/bag',
        unit: 'bag',
        availability: '500 bags available',
        minOrder: '50 bags',
        imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2b6f98d1f0?auto=format&fit=crop&w=900&q=60',
      },
      {
        id: 'prod-cement-2',
        name: 'Rapid Set Cement',
        description: 'Fast curing cement for schedule-critical pours.',
        price: '₹380/bag',
        unit: 'bag',
        availability: '300 bags available',
        minOrder: '40 bags',
        imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=60',
      },
      {
        id: 'prod-aggregate-1',
        name: 'River Sand (Washed)',
        description: 'Clean river sand for plastering and masonry work.',
        price: '₹950/ton',
        unit: 'ton',
        availability: '80 tons available',
        minOrder: '10 tons',
        imageUrl: 'https://images.unsplash.com/photo-1445510861639-5651173bc5d5?auto=format&fit=crop&w=900&q=60',
      },
    ],
  },
  {
    id: 'seller-2',
    name: 'Metro Steel Depot',
    distance: '5.1',
    coverage: '30',
    highlight: 'TMT Bars 8mm',
    price: '₹68/kg',
    availability: 'Delivery in 1 day',
    lat: 28.521,
    lng: 77.071,
    rating: 4.5,
    products: [
      {
        id: 'prod-steel-1',
        name: 'TMT Bars 8mm',
        description: 'IS 1786 Fe 500 grade thermo-mechanically treated bars.',
        price: '₹68/kg',
        unit: 'kg',
        availability: '2.5 tons available',
        minOrder: '1 ton',
        imageUrl: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=60',
      },
      {
        id: 'prod-steel-2',
        name: 'GI Wire Bundles',
        description: 'Galvanised binding wire for versatile site use.',
        price: '₹78/kg',
        unit: 'kg',
        availability: '1.2 tons available',
        minOrder: '100 kg',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=60',
      },
      {
        id: 'prod-steel-3',
        name: 'Steel Plates 12mm',
        description: 'Hot-rolled plates for fabrication and base plates.',
        price: '₹52/kg',
        unit: 'kg',
        availability: '3 tons available',
        minOrder: '500 kg',
        imageUrl: 'https://images.unsplash.com/photo-1474404674125-62c2f84be0ce?auto=format&fit=crop&w=900&q=60',
      },
    ],
  },
  {
    id: 'seller-3',
    name: 'BuildRight Aggregates',
    distance: '7.4',
    coverage: '18',
    highlight: 'River Sand',
    price: '₹950/ton',
    availability: 'Low stock',
    lat: 28.43,
    lng: 77.03,
    rating: 4.2,
    products: [
      {
        id: 'prod-sand-1',
        name: 'Coarse Aggregate 20mm',
        description: 'Angular crushed stone for structural concrete mixes.',
        price: '₹820/ton',
        unit: 'ton',
        availability: '110 tons available',
        minOrder: '15 tons',
        imageUrl: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=60',
      },
      {
        id: 'prod-sand-2',
        name: 'Manufactured Sand',
        description: 'Consistent M-sand for plastering and block work.',
        price: '₹720/ton',
        unit: 'ton',
        availability: '95 tons available',
        minOrder: '10 tons',
        imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=60',
      },
      {
        id: 'prod-sand-3',
        name: 'Ready Mix Concrete Grade M30',
        description: 'On-demand batching with pump included.',
        price: '₹5,800/cubic m',
        unit: 'm³',
        availability: 'Made-to-order',
        minOrder: '20 m³',
        imageUrl: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0f?auto=format&fit=crop&w=900&q=60',
      },
    ],
  },
];

export const buyerQuotations = [
  {
    id: 'Q-1023',
    counterpart: 'ABC Traders',
    product: 'OPC 53 Cement',
    quantity: '100 bags',
    status: 'COUNTER_SENT',
    location: 'Site A - Gurgaon',
    price: 'Seller offer ₹345/bag',
  },
  {
    id: 'Q-1018',
    counterpart: 'Metro Steel Depot',
    product: 'TMT Bars 10mm',
    quantity: '4 tons',
    status: 'PENDING',
    location: 'Warehouse - Noida',
    price: 'Awaiting response',
  },
];

export const buyerMessages = [
  {
    id: 'thread-abc',
    seller: 'ABC Traders',
    lastMessage: 'Delivery possible by Monday. Confirm?',
    timestamp: '2m ago',
    unreadCount: 2,
    messages: [
      { id: 'm1', sender: 'seller', text: 'Delivery possible by Monday. Confirm?', time: '2m ago' },
      { id: 'm2', sender: 'buyer', text: 'Need it by 10 AM, please confirm driver details.', time: 'Just now' },
    ],
  },
  {
    id: 'thread-metro',
    seller: 'Metro Steel Depot',
    lastMessage: 'Sharing updated TMT rate card.',
    timestamp: '30m ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', sender: 'seller', text: 'Sharing updated TMT rate card.', time: '30m ago' },
      { id: 'm2', sender: 'buyer', text: 'Received. Will review with procurement.', time: '25m ago' },
    ],
  },
];

export const sellerNotifications = {
  unreadChats: 3,
  unreadAlerts: 4,
};

export const sellerStats = [
  { label: 'New Quotations Today', value: '03' },
  { label: 'Pending Responses', value: '05' },
  { label: 'Accepted This Week', value: '07' },
];

export const sellerActivities = [
  'Q-1023 requested from XYZ Infra (Site A - Gurgaon)',
  'Price updated: OPC 53 (Main Yard)',
  'Stock alert: River Sand below threshold',
];

export const sellerInventory = [
  { name: 'OPC 53 Cement', sku: 'CEM-53', price: '₹350/bag', stock: '500 bags', min: '50', status: 'Active' },
  { name: 'TMT Bars 8mm', sku: 'TMT-8', price: '₹68/kg', stock: '2.5 tons', min: '1 ton', status: 'Active' },
  { name: 'River Sand', sku: 'SAND-01', price: '₹950/ton', stock: 'Low', min: '10 tons', status: 'Low stock' },
];

export const sellerQuotations = [
  {
    id: 'Q-1023',
    buyer: 'XYZ Infra',
    product: 'OPC 53 Cement',
    quantity: '100 bags',
    status: 'PENDING',
    location: 'Site A - Gurgaon',
    price: 'Buyer offer ₹340/bag',
  },
  {
    id: 'Q-1015',
    buyer: 'BuildStrong Ltd.',
    product: 'TMT Bars 10mm',
    quantity: '5 tons',
    status: 'COUNTER_SENT',
    location: 'Warehouse - Noida',
    price: 'Counter at ₹69/kg',
  },
];
