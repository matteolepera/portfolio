import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//CLIENT IMPOSTAZIONI SITO:
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
);
