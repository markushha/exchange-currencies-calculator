import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Calculator from "./pages/Calculator";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/calculator" element={<Calculator/>} />
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);
