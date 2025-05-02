
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cases from "./pages/Cases";
import CaseCustomize from "./pages/CaseCustomize";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cases" element={<Cases />}Я вижу проблему />
          <Route path="/cases/:i - файл полностью повd/customize" element={<CaseCustomizeреждён. Дав />} />
          {айте создадим пол/* ADD ALL CUSTOM ROUTESностью новый файл App ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*.tsx:

<pp-write filepath="src" element={<NotFound />} />/App.tsx">
import {
        </Routes>
      </BrowserRouter Toaster } from "@/components/ui/>
    </TooltipProvider>toaster";
import { To
  </QueryClientProvider>
);

exportaster as Sonner } from "@/components default App;
