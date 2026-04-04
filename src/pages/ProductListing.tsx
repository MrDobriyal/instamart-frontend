import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, SlidersHorizontal, ChevronDown, Bookmark } from 'lucide-react';
import { categories, products } from '@/data/mockData';
import { useCartStore } from '@/stores/cartStore';
import { useFilterStore } from '@/stores/filterStore';
import FilterModal from '@/components/FilterModal';

const ProductListing = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [activeSubcat, setActiveSubcat] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const { sortBy, tags } = useFilterStore();

  const category = categories.find((c) => c.id === categoryId);
  const subcategories = category?.subcategories || [];

  let filteredProducts = products.filter((p) => p.category === categoryId);
  if (activeSubcat) {
    filteredProducts = filteredProducts.filter((p) => p.subcategory === activeSubcat);
  }
  if (tags.length > 0) {
    filteredProducts = filteredProducts.filter((p) => tags.some((t) => p.tags.includes(t)));
  }
  if (sortBy === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);
  else if (sortBy === 'discount') filteredProducts.sort((a, b) => b.discount - a.discount);

  const filterChips = [
    { id: 'price-drop', label: 'Price Drop' },
    { id: 'fresh', label: 'Fresh' },
    { id: 'festive', label: 'Festive Special' },
  ];

  return (
    <div className="min-h-screen bg-muted max-w-[430px] mx-auto">
      {/* Header */}
      <div className="bg-background px-3 py-3 flex items-center gap-3 border-b border-border sticky top-0 z-20">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <h1 className="flex-1 text-base font-bold text-foreground truncate">
          {category?.name || 'Products'}
        </h1>
        <Search className="h-5 w-5 text-foreground" />
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        {subcategories.length > 0 && (
          <div className="w-[72px] bg-background border-r border-border overflow-y-auto shrink-0" style={{ height: 'calc(100vh - 52px)' }}>
            {subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcat(activeSubcat === sub.id ? null : sub.id)}
                className={`w-full py-3 px-1 flex flex-col items-center gap-1 border-l-2 transition-colors ${
                  activeSubcat === sub.id
                    ? 'border-l-primary bg-primary/5'
                    : 'border-l-transparent'
                }`}
              >
                <span className="text-2xl">{sub.image}</span>
                <span className="text-[9px] font-medium text-foreground text-center leading-tight">{sub.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 52px)' }}>
          {/* Promo Banner */}
          <div className="p-3">
            <div className="bg-gradient-to-r from-brand-green/10 to-brand-green/5 rounded-xl p-4 text-center">
              <p className="text-xs font-semibold text-foreground">Fresh from farm 🌾</p>
              <p className="text-[10px] text-muted-foreground">Delivered within 10 minutes</p>
            </div>
          </div>

          {/* Filter/Sort Bar */}
          <div className="px-3 pb-2 flex gap-2 overflow-x-auto">
            <button
              onClick={() => setShowFilter(true)}
              className="flex items-center gap-1 px-3 py-1.5 border border-border rounded-full text-[11px] font-medium text-foreground shrink-0"
            >
              <SlidersHorizontal className="h-3 w-3" /> Filter
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-border rounded-full text-[11px] font-medium text-foreground shrink-0">
              Sort By <ChevronDown className="h-3 w-3" />
            </button>
            {filterChips.map((chip) => (
              <button
                key={chip.id}
                onClick={() => useFilterStore.getState().toggleTag(chip.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium shrink-0 ${
                  tags.includes(chip.id)
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-foreground'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="px-3 pb-4 grid grid-cols-2 gap-2">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-background rounded-xl p-2 relative">
                <button className="absolute top-2 right-2 z-10">
                  <Bookmark className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
                {product.discount > 0 && (
                  <span className="absolute top-2 left-2 bg-blue-700 text-primary-foreground text-[8px] font-bold px-1.5 py-0.5 rounded z-10">
                    {product.discount}% OFF
                  </span>
                )}
                <div className="text-5xl text-center py-3">{product.image}</div>
                <div className="text-[9px] text-muted-foreground mb-0.5">⚡ {product.deliveryTime}</div>
                <p className="text-[11px] font-medium text-foreground leading-tight mb-0.5">{product.name}</p>
                <p className="text-[9px] text-muted-foreground mb-1.5">{product.weight}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-foreground">₹{product.price}</span>
                    <span className="text-[10px] text-muted-foreground line-through ml-1">₹{product.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => addItem({ productId: product.id, name: product.name, price: product.price, weight: product.weight, image: product.image })}
                    className="h-7 w-7 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-2 py-12 text-center">
                <p className="text-sm text-muted-foreground">No products found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showFilter && <FilterModal onClose={() => setShowFilter(false)} />}
    </div>
  );
};

export default ProductListing;
