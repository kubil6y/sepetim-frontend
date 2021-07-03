import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getColorByCategory } from '../helpers';
import { CategoryType } from '../types';

interface IBigBadgeProps {
  categorySlug: CategoryType;
}

export const BigBadge: FC<IBigBadgeProps> = ({ categorySlug }) => {
  const categoryColors = getColorByCategory(categorySlug);

  return (
    <>
      <Helmet>
        <title>Sepetim | {categorySlug}</title>
      </Helmet>
      <div className='cst-container'>
        <h1
          className='text-2xl border-b-2 inline-block p-1'
          style={{ borderColor: 'black' }}
        >
          Merhaba
        </h1>
      </div>
    </>
  );
};
