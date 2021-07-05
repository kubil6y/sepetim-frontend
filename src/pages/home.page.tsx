import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Categories, SlideShow } from '../components';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sepetim | Online Food Service</title>
      </Helmet>
      <div className='mt-3 cst-container'>
        <SlideShow />
        <Categories />
        <div>orders here</div>
      </div>
    </>
  );
};
