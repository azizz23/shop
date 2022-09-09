import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { getAllProductData } from "./store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

// pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Layout from "./layout";
import Modal from "./components/Modal";
import LoadingPage from "./components/LoadingPage";
import ToTopBtn from "./components/ToTopBtn";
import FloatingWhatsappBtn from "./components/FloatingWhatsappBtn";
import OlderModal from "./components/OlderModal";


const App = () => {
  const dispatch = useDispatch<any>();
  const { data } = useSelector(({ products }: { products: any }) => products);
  const [isLoading, setIsLoading] = useState(false);
  const [scroll, setScroll] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  useEffect(() => {
    dispatch(getAllProductData());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(data).length) setIsLoading(true);
  }, [data]);

  useEffect(() => {
    window.onscroll = () => setScroll(window.scrollY);
  }, []);

  return (
    <div className="App">
      <OlderModal />
      <Modal />
      <Layout scroll={scroll}>
        {isLoading ? (
          <Routes>
            <Route index element={<Home products={data} />} />
            <Route path="/product/:id" element={<Product products={data} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <LoadingPage />
        )}
      </Layout>
      <FloatingWhatsappBtn />
      <ToTopBtn scroll={scroll} />
    </div>
  );
};

export default App;
