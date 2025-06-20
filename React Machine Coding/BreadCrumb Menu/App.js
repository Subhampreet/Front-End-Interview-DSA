import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetail from "./pages/product-detail";
import BreadCrumb from "../components/BreadCrumb";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* bread crumbs */}
        <BreadCrumb />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
