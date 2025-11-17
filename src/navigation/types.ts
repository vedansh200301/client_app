export type RootStackParamList = {
  RoleSelect: undefined;
  BuyerStack: undefined;
  SellerStack: undefined;
};

export type BuyerTabParamList = {
  BuyerHome: undefined;
  BuyerQuotations: undefined;
  BuyerMessages: undefined;
  BuyerProfile: undefined;
};

export type SellerTabParamList = {
  SellerHome: undefined;
  SellerQuotations: undefined;
  SellerInventory: undefined;
  SellerProfile: undefined;
  SellerLocations: undefined;
};

export type BuyerStackParamList = {
  BuyerTabs: undefined;
  BuyerSellerDetail: { sellerId: string } | undefined;
  BuyerQuotationDetail: { quotationId: string } | undefined;
  BuyerChat: { threadId: string };
};

export type SellerStackParamList = {
  SellerTabs: undefined;
  SellerQuotationDetail: { quotationId: string } | undefined;
};
