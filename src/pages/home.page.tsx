import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Categories, PastOrders, SlideShow } from '../components';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sepetim | Online Food Service</title>
      </Helmet>
      <div className='mt-3 cst-container space-y-4 mb-24'>
        <Categories />
        <SlideShow />
        <PastOrders />
      </div>
    </>
  );
};
