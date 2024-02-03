// App.tsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import MainPage from './pages/main/MainPage';
import NotFound from './components/notFound/NotFound';
import Shop from './pages/shop/Shop';
import Cart from './pages/shop/Cart';
import { CartProvider } from './/components/CartContext';
import OurHistory from './components/OurHistory';
import Journal from './components/journal';



function App() {
  return (
    <CartProvider>
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path='/OurHistory' element={<OurHistory/>}/>
          <Route path='/Journal' element={<Journal/>}/>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </>
    </CartProvider>
  );
}

export default App;
