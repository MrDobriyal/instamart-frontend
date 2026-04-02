import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { categories } from '@/data/mockData';

const CategoriesPage = () => {
  const navigate = useNavigate();

  const freshCategories = categories.filter((c) => c.group === 'fresh');
  const groceryCategories = categories.filter((c) => c.group === 'grocery');
  const snackCategories = categories.filter((c) => c.group === 'snacks');

  return (
    <div className="min-h-screen bg-muted max-w-[430px] mx-auto pb-20">
      {/* Header */}
      <div className="bg-background px-4 py-3 flex items-center justify-between border-b border-border sticky top-0 z-10">
        <h1 className="text-lg font-bold text-foreground">Categories</h1>
        <button>
          <Search className="h-5 w-5 text-foreground" />
        </button>
      </div>

      <div className="p-4 space-y-6">
        <CategorySection title="Fresh Items" items={freshCategories} onItemClick={(id) => navigate(`/products/${id}`)} />
        <CategorySection title="Grocery & Kitchen" items={groceryCategories} onItemClick={(id) => navigate(`/products/${id}`)} />
        <CategorySection title="Snacks & Drinks" items={snackCategories} onItemClick={(id) => navigate(`/products/${id}`)} />
      </div>

      <BottomNav />
    </div>
  );
};

const CategorySection = ({ title, items, onItemClick }: { title: string; items: typeof categories; onItemClick: (id: string) => void }) => (
  <div>
    <h2 className="text-sm font-bold text-foreground mb-3">{title}</h2>
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="bg-background rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm"
        >
          <span className="text-4xl">{item.image}</span>
          <span className="text-xs font-medium text-foreground text-center leading-tight">{item.name}</span>
        </button>
      ))}
    </div>
  </div>
);

export default CategoriesPage;
