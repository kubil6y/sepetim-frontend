import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Categories } from '../components';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sepetim | Online Food Service</title>
      </Helmet>
      <div className='mt-3 cst-container'>
        <Categories />
        <div>Home page</div>
        <div>Home page</div>
        <div>Home page</div>
        <Link to='/login'>login</Link>
      </div>
    </>
  );
};
