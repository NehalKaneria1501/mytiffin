export type UserRole = 'consumer' | 'provider' | 'admin';

export type OrderFulfillmentMode = 'delivery' | 'takeaway' | 'dinein';

export type KitchenCategory = 'home_chef' | 'student_mess' | 'corporate_canteen' | 'gourmet_dining' | 'parcel_point' | 'cloud_kitchen';

export type StarRatingTier = '3_star' | '4_star' | '5_star' | '6_star' | '7_star';
export type StarTier = StarRatingTier;

export type DietaryType = 'pure-veg' | 'non-veg' | 'jain';

export interface AuthUser {
  id: string;
  email?: string;
  phone?: string;
  fullName: string;
  role: UserRole;
}

export interface Address {
  id: string;
  label: string; // 'Home', 'Work', 'Hostel', 'PG', 'Other'
  street: string;
  apartment?: string;
  landmark?: string;
  city: string;
  pincode: string;
  isDefault: boolean;
}

export interface MenuItem {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  lunch: {
    curry: string;
    dal: string;
    bread: string;
    rice: string;
    sides?: string;
  };
  dinner: {
    curry: string;
    dal: string;
    bread: string;
    rice: string;
    sides?: string;
  };
}

export interface MealCollection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  dietType: 'pure-veg' | 'non-veg' | 'jain' | 'eggetarian';
  caloriesAvg: number;
  image: string;
  weeklyPrice: number; // e.g., 6 days
  monthlyPrice: number; // e.g., 26 days
  itemsIncluded: string[];
}

export interface Provider {
  id: string;
  name: string;
  tagline: string;
  ownerName: string;
  rating: number;
  starTier: StarRatingTier; // 3 to 7 star
  kitchenCategory: KitchenCategory;
  city: string;
  reviewCount: number;
  fssaiNumber: string;
  verified: boolean;
  status: 'active' | 'pending' | 'suspended';
  cuisine: string[];
  dietary: DietaryType[];
  servicePincodes: string[];
  kitchenAddress: string;
  avatar: string;
  coverImage: string;
  subscriberCount: number;
  startingPriceMonthly: number;
  takeawayAvailable: boolean;
  hasDineIn: boolean;
  hasParcelPoint: boolean;
  isStudentFavorite?: boolean;
  isOfficeFavorite?: boolean;
  deliverySlots: {
    lunch: string;
    dinner: string;
  };
  mealCollections: MealCollection[];
  weeklyMenu: MenuItem[];
}

export interface Subscription {
  id: string;
  providerId: string;
  providerName: string;
  collectionId: string;
  collectionName: string;
  planDuration: 'weekly' | 'monthly';
  mealType: 'lunch' | 'dinner' | 'both';
  fulfillmentMode: OrderFulfillmentMode;
  startDate: string;
  endDate: string;
  totalMeals: number;
  deliveredMeals: number;
  skippedMeals: number;
  remainingMeals: number;
  status: 'active' | 'paused' | 'cancelled' | 'completed';
  deliveryAddress: Address;
  amountPaid: number;
  paymentId: string;
  deliverySlot: string;
  dietType: string;
}

export interface MembershipPass {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  targetAudience: 'Student' | 'Office & Tech' | 'VIP Gourmet';
  monthlyPrice: number;
  pricePerMeal: number;
  colorScheme: string;
  perks: string[];
  popularCity: string;
}

export interface LiveOrderTracking {
  id: string;
  orderNumber: string;
  kitchenName: string;
  kitchenAddress: string;
  dishName: string;
  fulfillmentMode: OrderFulfillmentMode;
  currentStep: 1 | 2 | 3 | 4 | 5; // 1: Confirmed, 2: Cooking, 3: Packed, 4: In Transit / Pickup Ready, 5: Delivered
  estimatedMinutes: number;
  deliverySlot: string;
  deliveryOtp: string;
  riderName?: string;
  riderPhone?: string;
  riderVehicle?: string;
  destinationAddress: string;
  parcelLockerCode?: string;
}

export type InquiryCategory =
  | 'corporate'
  | 'student_mess'
  | 'chef_partner'
  | 'event_catering'
  | 'customer_care'
  | 'other';

export interface InquirySubmission {
  id: string;
  category: InquiryCategory;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  pincode?: string;
  organizationName?: string;
  estimatedMealsCount?: string;
  dietaryPreference?: 'all' | 'pure_veg' | 'jain' | 'custom';
  startDate?: string;
  subject: string;
  message: string;
  status: 'new' | 'contacted' | 'in_review' | 'resolved';
  createdAt: string;
}
