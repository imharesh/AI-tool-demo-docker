export interface AITool {
  name: string;
  description: string;
  category: string;
  subcategory: string;
  url?: string;
  isFree?: boolean;
  features?: string[];
  pricing?: {
    startingPrice?: string;
    hasFreeVersion?: boolean;
    priceModel?: string;
  };
  integrations?: string[];
  platforms?: string[];
}

export type Category = {
  name: string;
  subcategories: string[];
};

export interface FilterState {
  category: string;
  subcategory: string;
  searchQuery: string;
  isFree: boolean;
}
