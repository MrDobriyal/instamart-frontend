import { useState } from 'react';
import { useFilterStore } from '@/stores/filterStore';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const filterCategories = [
  { id: 'sort', label: 'Sort' },
  { id: 'tags', label: 'Tags' },
  { id: 'type', label: 'Type' },
  { id: 'price', label: 'Price' },
  { id: 'pack', label: 'Pack Size' },
];

const sortOptions = [
  { id: 'relevance', label: 'Relevance' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'discount', label: 'Discount: High to Low' },
];

const tagOptions = [
  { id: 'fresh', label: 'Fresh' },
  { id: 'price-drop', label: 'Price Drop' },
  { id: 'festive', label: 'Festive Special' },
  { id: 'organic', label: 'Organic' },
];

interface FilterModalProps {
  onClose: () => void;
}

const FilterModal = ({ onClose }: FilterModalProps) => {
  const [activeCategory, setActiveCategory] = useState('sort');
  const { sortBy, tags, setSortBy, toggleTag, clearFilters } = useFilterStore();

  const handleApply = () => {
    onClose();
  };

  const handleClear = () => {
    clearFilters();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-foreground/50" onClick={onClose} />
      <div className="relative bg-background w-full max-w-[430px] rounded-t-2xl max-h-[70vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="text-base font-bold text-foreground">Filters</h2>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel */}
          <div className="w-[120px] bg-muted border-r border-border overflow-y-auto">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-background text-brand-blue border-l-2 border-l-brand-blue'
                    : 'text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right Panel */}
          <div className="flex-1 p-4 overflow-y-auto">
            {activeCategory === 'sort' && (
              <div className="space-y-3">
                {sortOptions.map((option) => (
                  <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                        sortBy === option.id ? 'border-brand-blue' : 'border-border'
                      }`}
                    >
                      {sortBy === option.id && <div className="h-2 w-2 rounded-full bg-brand-blue" />}
                    </div>
                    <span className="text-sm text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            )}

            {activeCategory === 'tags' && (
              <div className="space-y-3">
                {tagOptions.map((option) => (
                  <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                    <div
                      onClick={() => toggleTag(option.id)}
                      className={`h-4 w-4 rounded border-2 flex items-center justify-center cursor-pointer ${
                        tags.includes(option.id) ? 'border-brand-blue bg-brand-blue' : 'border-border'
                      }`}
                    >
                      {tags.includes(option.id) && <span className="text-primary-foreground text-[10px]">✓</span>}
                    </div>
                    <span className="text-sm text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            )}

            {(activeCategory === 'type' || activeCategory === 'price' || activeCategory === 'pack') && (
              <p className="text-sm text-muted-foreground">Coming soon</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-4 border-t border-border">
          <Button variant="outline" className="flex-1" onClick={handleClear}>
            Clear Filters
          </Button>
          <Button className="flex-1" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
