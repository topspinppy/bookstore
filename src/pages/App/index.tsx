import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import MainPage from '../MainPage/MainPage';
import Payment from '../Payment/Payment';
import ViewProduct from '../ViewProduct/ViewProduct';

import PageLayout from './PageLayout'

const App: React.FC = (): React.ReactElement => {
  return (
    <div>
      <PageLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/detail/:id" element={<ViewProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </PageLayout>
    </div>
  )
}

export default App
