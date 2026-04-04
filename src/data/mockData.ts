import { Product, Category, PromoCard, DealProduct } from '@/types/product';

export const categories: Category[] = [
  { id: 'fresh-veg', name: 'Fresh Vegetables', image: '🥬', group: 'fresh', subcategories: [
    { id: 'all-veg', name: 'Fresh Vegetables', image: '🥬' },
    { id: 'leafy', name: 'Leafy & Seasoning', image: '🌿' },
    { id: 'pooja', name: 'Pooja & Festive', image: '🪷' },
    { id: 'exotic', name: 'Exotic Vegetables', image: '🥑' },
  ]},
  { id: 'fresh-fruits', name: 'Fresh Fruits', image: '🍎', group: 'fresh', subcategories: [
    { id: 'all-fruits', name: 'All Fruits', image: '🍎' },
    { id: 'seasonal', name: 'Seasonal Fruits', image: '🥭' },
    { id: 'exotic-fruits', name: 'Exotic Fruits', image: '🫐' },
  ]},
  { id: 'dairy', name: 'Dairy, Bread & Eggs', image: '🥛', group: 'fresh' },
  { id: 'meat', name: 'Meat & Seafood', image: '🍖', group: 'fresh' },
  { id: 'atta-rice', name: 'Atta, Rice & Dal', image: '🌾', group: 'grocery' },
  { id: 'masalas', name: 'Masalas & Spices', image: '🌶️', group: 'grocery' },
  { id: 'oils', name: 'Oils & Ghee', image: '🫒', group: 'grocery' },
  { id: 'cereals', name: 'Cereals & Breakfast', image: '🥣', group: 'grocery' },
  { id: 'cold-drinks', name: 'Cold Drinks & Juices', image: '🥤', group: 'snacks' },
  { id: 'ice-cream', name: 'Ice Creams & More', image: '🍦', group: 'snacks' },
  { id: 'chips', name: 'Chips & Namkeen', image: '🍿', group: 'snacks' },
  { id: 'chocolates', name: 'Chocolates & Sweets', image: '🍫', group: 'snacks' },
];

export const promoCards: PromoCard[] = [
  { id: 'p1', title: 'Ram Navami Puja Needs', image: '🪔', bgColor: 'hsl(330, 81%, 95%)' },
  { id: 'p2', title: 'Kanjak Needs', image: '🙏', bgColor: 'hsl(280, 81%, 95%)' },
  { id: 'p3', title: 'Fasting Essentials', image: '🍽️', bgColor: 'hsl(25, 95%, 95%)' },
  { id: 'p4', title: 'Sweets & Dryfruits', image: '🍬', bgColor: 'hsl(45, 93%, 95%)' },
];

export const dealProducts: DealProduct[] = [
  { id: 'd1', name: 'Fresho Potato', image: '🥔', originalPrice: 44, dealPrice: 1, weight: '1 kg' },
  { id: 'd2', name: 'Fresho Onion', image: '🧅', originalPrice: 35, dealPrice: 1, weight: '1 kg' },
  { id: 'd3', name: 'Fresho Tomato', image: '🍅', originalPrice: 52, dealPrice: 1, weight: '500 g' },
  { id: 'd4', name: 'Amul Toned Milk', image: '🥛', originalPrice: 30, dealPrice: 1, weight: '500 ml' },
];

export const products: Product[] = [
  {
    id: '1', name: 'Fresho Potato', description: 'Farm fresh potatoes, perfect for curries',
    price: 33, originalPrice: 44, discount: 25, image: '🥔',
    category: 'fresh-veg', subcategory: 'all-veg', weight: '1 kg',
    weightOptions: ['500 g', '1 kg', '2 kg'], deliveryTime: '10 mins',
    tags: ['fresh', 'price-drop'], inStock: true,
  },
  {
    id: '2', name: 'Fresho Onion', description: 'Red onions, essential for every kitchen',
    price: 28, originalPrice: 35, discount: 20, image: '🧅',
    category: 'fresh-veg', subcategory: 'all-veg', weight: '1 kg',
    weightOptions: ['500 g', '1 kg', '2 kg'], deliveryTime: '10 mins',
    tags: ['fresh'], inStock: true,
  },
  {
    id: '3', name: 'Fresho Tomato - Local', description: 'Juicy red tomatoes for daily cooking',
    price: 39, originalPrice: 52, discount: 25, image: '🍅',
    category: 'fresh-veg', subcategory: 'all-veg', weight: '500 g',
    weightOptions: ['250 g', '500 g', '1 kg'], deliveryTime: '10 mins',
    tags: ['fresh', 'price-drop'], inStock: true,
  },
  {
    id: '4', name: 'Green Capsicum', description: 'Fresh green bell pepper',
    price: 24, originalPrice: 32, discount: 25, image: '🫑',
    category: 'fresh-veg', subcategory: 'all-veg', weight: '250 g',
    weightOptions: ['250 g', '500 g'], deliveryTime: '10 mins',
    tags: ['fresh'], inStock: true,
  },
  {
    id: '5', name: 'Carrot - Ooty', description: 'Sweet and crunchy Ooty carrots',
    price: 45, originalPrice: 56, discount: 20, image: '🥕',
    category: 'fresh-veg', subcategory: 'all-veg', weight: '500 g',
    weightOptions: ['250 g', '500 g', '1 kg'], deliveryTime: '10 mins',
    tags: ['fresh'], inStock: true,
  },
  {
    id: '6', name: 'Cucumber', description: 'Fresh green cucumber',
    price: 18, originalPrice: 25, discount: 28, image: '🥒',
    category: 'fresh-veg', subcategory: 'all-veg', weight: '500 g',
    weightOptions: ['250 g', '500 g', '1 kg'], deliveryTime: '10 mins',
    tags: ['price-drop'], inStock: true,
  },
  {
    id: '7', name: 'Coriander Leaves', description: 'Fresh coriander for garnishing',
    price: 12, originalPrice: 15, discount: 20, image: '🌿',
    category: 'fresh-veg', subcategory: 'leafy', weight: '100 g',
    weightOptions: ['100 g', '250 g'], deliveryTime: '10 mins',
    tags: ['fresh'], inStock: true,
  },
  {
    id: '8', name: 'Spinach', description: 'Fresh palak leaves',
    price: 22, originalPrice: 30, discount: 27, image: '🥬',
    category: 'fresh-veg', subcategory: 'leafy', weight: '250 g',
    weightOptions: ['250 g', '500 g'], deliveryTime: '10 mins',
    tags: ['fresh'], inStock: true,
  },
  {
    id: '9', name: 'Apple - Shimla', description: 'Juicy Shimla apples',
    price: 120, originalPrice: 150, discount: 20, image: '🍎',
    category: 'fresh-fruits', subcategory: 'all-fruits', weight: '500 g',
    weightOptions: ['500 g', '1 kg'], deliveryTime: '10 mins',
    tags: ['fresh'], inStock: true,
  },
  {
    id: '10', name: 'Banana - Robusta', description: 'Yellow ripe bananas',
    price: 45, originalPrice: 55, discount: 18, image: '🍌',
    category: 'fresh-fruits', subcategory: 'all-fruits', weight: '6 pcs',
    weightOptions: ['6 pcs', '12 pcs'], deliveryTime: '10 mins',
    tags: ['fresh'], inStock: true,
  },
  {
    id: '11', name: 'Amul Toned Milk', description: 'Pasteurized toned milk',
    price: 28, originalPrice: 30, discount: 7, image: '🥛',
    category: 'dairy', subcategory: 'milk', weight: '500 ml',
    weightOptions: ['500 ml', '1 L'], deliveryTime: '10 mins',
    tags: [], inStock: true,
  },
  {
    id: '12', name: 'Aashirvaad Atta', description: 'Whole wheat atta',
    price: 245, originalPrice: 290, discount: 16, image: '🌾',
    category: 'atta-rice', subcategory: 'atta', weight: '5 kg',
    weightOptions: ['1 kg', '5 kg', '10 kg'], deliveryTime: '10 mins',
    tags: ['price-drop'], inStock: true,
  },
];

export const categoryTabs = [
  { id: 'all', name: 'All', icon: '🏠' },
  { id: 'fresh', name: 'Fresh', icon: '🥬' },
  { id: 'navratri', name: 'Navratri', icon: '🪔' },
  { id: 'summer', name: 'Summer', icon: '☀️' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
];

export const searchPlaceholders = [
  "Search for 'Namkeens'",
  "Search for 'Atta, Curd & more'",
  "Search for 'Cold Drinks'",
  "Search for 'Fresh Fruits'",
  "Search for 'Ice Cream'",
];
