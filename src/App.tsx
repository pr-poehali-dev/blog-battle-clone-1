
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserТеперь я обновлю App.tsx, добавив необходимыеRouter, Routes, Route } from "react-router-dom маршруты:

<pp";
import Index from "./pages/Index";
import Cases from "./pages/Cases";-write filepath="src/App.tsx
import CaseCustomize from "./pages/C" start_line="aseCustomize";
import NotFound from "./pages/6" end_line="NotFound";

const queryClient = new22">import { BrowserRouter, Routes, QueryClient();

const App = () Route } from "react-router-dom"; => (
  <QueryClient
import Index from "./Provider client={queryClient}>
    <Topages/Index";oltipProvider>
import NotFound from "./pages/NotFound";
      <Toaster />
import Cases from "./pages/Cases";
import CaseCustomize
      <Sonner />
       from "./pages/CaseCustomize";<BrowserRouter>
        <Routes>

const queryClient = new QueryClient
          <Route path="/" element={<Index();

const App = />} />
           () => (
  <QueryClientProvider client<Route path="/cases" element={<Cases={queryClient}>
    <Tooltip />} />
          <Route path="/casesProvider>
      /:id/customize" element={<Toaster />
      <Sonner />
      <B<CaseCustomize />} />
          {rowserRouter>
        <Routes>
          <Route path="/" element={<Index />/* ADD ALL CUSTOM ROUTES} />
          <Route path="/cases" element={<Cases />} />
           ABOVE THE CATCH-ALL "*<Route path="/cases/:" ROUTE */}
          <Route pathid/customize" element={="*" element={<NotFound />} />
        </Routes<CaseCustomize />} />
          {>
      </BrowserRouter>
    /* ADD ALL CUSTOM ROUTES ABOVE THE</TooltipProvider CATCH-ALL "*" ROUTE */}>
  </QueryClientProvider>
);
          <Route path

export default App;
</pp-write="*" element={<NotFound />} />
        </Routes>

🚀 >
      </BrowserRouter>
    </TooltipProvider>
  </QueryГотово! Я создал функClientProvider>
);