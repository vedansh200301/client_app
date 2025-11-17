export type LatLng = { lat: number; lng: number };

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
    id: 'msg-1',
    seller: 'ABC Traders',
    lastMessage: 'Delivery possible by Monday. Confirm?',
    timestamp: '2m ago',
  },
  {
    id: 'msg-2',
    seller: 'Metro Steel Depot',
    lastMessage: 'Sharing updated TMT rate card.',
    timestamp: '30m ago',
  },
];

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
