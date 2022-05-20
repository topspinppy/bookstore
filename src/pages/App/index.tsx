import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

import PageLayout from './PageLayout'

const App: React.FC = (): React.ReactElement => {
  return (
    <div>
      <PageLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/detail/:id" element={<div>Detail</div>} />
          <Route path="/cart" element={<div>Cart</div>} />
          <Route path="/checkout" element={<div>checkout</div>} />
          <Route path="/payment" element={<div>Payment</div>} />
        </Routes>
      </PageLayout>
    </div>
  )
}

export default App
