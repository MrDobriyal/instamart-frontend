import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, Bookmark, ChevronDown, User, Clock, MapPin } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { categories, promoCards, dealProducts, products, categoryTabs, searchPlaceholders } from '@/data/mockData';
import { useCartStore } from '@/stores/cartStore';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const freshCategories = categories.filter((c) => c.group === 'fresh');
  const groceryCategories = categories.filter((c) => c.group === 'grocery');
  const snackCategories = categories.filter((c) => c.group === 'snacks');

  return (
    <div className="min-h-screen bg-muted max-w-[430px] mx-auto pb-20">
      {/* Header */}
      <div className="bg-primary px-4 pt-3 pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-bold text-primary-foreground">35 mins</span>
          </div>
          <button className="h-8 w-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </button>
        </div>
        <button className="flex items-center gap-1 mb-3">
          <MapPin className="h-3 w-3 text-primary-foreground" />
          <span className="text-xs text-primary-foreground font-medium">Home - Sector 62, Noida</span>
          <ChevronDown className="h-3 w-3 text-primary-foreground" />
        </button>

        {/* Search Bar */}
        <div className="bg-background rounded-xl flex items-center px-3 py-2.5 gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="flex-1 text-sm text-muted-foreground truncate">
            {searchPlaceholders[placeholderIdx]}
          </span>
          <Sparkles className="h-4 w-4 text-brand-orange" />
          <div className="w-px h-4 bg-border" />
          <Bookmark className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-background px-3 py-2 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Banking Partner Banner */}
      <div className="px-3 py-3">
        <div className="bg-gradient-to-r from-brand-blue/10 to-brand-blue/5 rounded-xl p-4 flex items-center gap-3">
          <div className="text-3xl">🏦</div>
          <div>
            <p className="text-xs font-semibold text-foreground">Get 10% instant discount</p>
            <p className="text-[10px] text-muted-foreground">With HDFC Bank credit cards</p>
          </div>
        </div>
      </div>

      {/* Promotional Cards */}
      <div className="px-3 pb-3 overflow-x-auto">
        <div className="flex gap-3 min-w-max">
          {promoCards.map((card) => (
            <div
              key={card.id}
              className="w-[140px] rounded-xl p-3 flex flex-col items-center shrink-0"
              style={{ backgroundColor: card.bgColor }}
            >
              <span className="text-3xl mb-2">{card.image}</span>
              <p className="text-[10px] font-semibold text-foreground text-center leading-tight">{card.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1 Rupee Store */}
      <div className="px-3 pb-4">
        <div className="bg-gradient-to-r from-brand-yellow/20 to-brand-orange/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🏷️</span>
            <h2 className="text-sm font-bold text-foreground">₹1 Store</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {dealProducts.map((deal) => (
              <div key={deal.id} className="bg-background rounded-lg p-2 min-w-[100px] shrink-0">
                <div className="text-3xl text-center mb-1">{deal.image}</div>
                <p className="text-[10px] text-foreground font-medium truncate">{deal.name}</p>
                <p className="text-[9px] text-muted-foreground">{deal.weight}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs font-bold text-primary">₹{deal.dealPrice}</span>
                  <span className="text-[10px] text-muted-foreground line-through">₹{deal.originalPrice}</span>
                </div>
                <button className="w-full mt-1.5 py-1 border border-primary text-primary text-[10px] font-semibold rounded-md">
                  Select
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-2 py-2 text-xs font-semibold text-brand-orange">
            View all items →
          </button>
        </div>
      </div>

      {/* Most Shopped Near You */}
      <div className="px-3 pb-4">
        <h2 className="text-sm font-bold text-foreground mb-3">Most Shopped Near You</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="bg-background rounded-lg p-2 min-w-[120px] shrink-0 relative">
              {product.discount > 0 && (
                <span className="absolute top-1 left-1 bg-brand-blue text-primary-foreground text-[8px] font-bold px-1.5 py-0.5 rounded">
                  {product.discount}% OFF
                </span>
              )}
              <div className="text-4xl text-center py-2">{product.image}</div>
              <p className="text-[10px] text-foreground font-medium truncate">{product.name}</p>
              <p className="text-[9px] text-muted-foreground">{product.weight}</p>
              <div className="flex items-center justify-between mt-1.5">
                <div>
                  <span className="text-xs font-bold text-foreground">₹{product.price}</span>
                  <span className="text-[10px] text-muted-foreground line-through ml-1">₹{product.originalPrice}</span>
                </div>
                <button
                  onClick={() => addItem({ productId: product.id, name: product.name, price: product.price, weight: product.weight, image: product.image })}
                  className="h-6 w-6 bg-primary text-primary-foreground rounded-md flex items-center justify-center text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Grids */}
      <CategoryGrid title="Fresh Items" items={freshCategories} onItemClick={(id) => navigate(`/products/${id}`)} />
      <CategoryGrid title="Grocery & Kitchen" items={groceryCategories} onItemClick={(id) => navigate(`/products/${id}`)} />
      <CategoryGrid title="Snacks & Drinks" items={snackCategories} onItemClick={(id) => navigate(`/products/${id}`)} />

      {/* Free Delivery Banner */}
      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-3 z-40">
        <div className="bg-primary text-primary-foreground text-center py-2 rounded-lg text-xs font-semibold">
          🚚 FREE DELIVERY on orders above ₹99
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

const CategoryGrid = ({ title, items, onItemClick }: { title: string; items: typeof categories; onItemClick: (id: string) => void }) => (
  <div className="px-3 pb-4">
    <h2 className="text-sm font-bold text-foreground mb-3">{title}</h2>
    <div className="grid grid-cols-4 gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="bg-background rounded-xl p-2 flex flex-col items-center gap-1.5"
        >
          <span className="text-3xl">{item.image}</span>
          <span className="text-[10px] font-medium text-foreground text-center leading-tight">{item.name}</span>
        </button>
      ))}
    </div>
  </div>
);

export default HomePage;
