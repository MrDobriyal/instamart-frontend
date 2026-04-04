import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter} from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/routes/index";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
       <Index/>
        <Sonner />
          {/* Devtools here  you will see a small popup at your app */}
      <ReactQueryDevtools initialIsOpen={false} />  
      
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
