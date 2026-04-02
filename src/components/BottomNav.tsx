import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Grid3X3, Printer, Sparkles } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'categories', label: 'Categories', icon: Grid3X3, path: '/categories' },
  { id: 'print', label: 'Print', icon: Printer, path: '/print', badge: 'NEW' },
  { id: 'offers', label: 'Offers', icon: Sparkles, path: '/offers' },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-background border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-0.5 px-3 py-1 relative"
            >
              <item.icon
                className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
              />
              <span
                className={`text-[10px] font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {item.label}
              </span>
              {item.badge && (
                <span className="absolute -top-1 right-0 bg-brand-orange text-primary-foreground text-[8px] font-bold px-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
