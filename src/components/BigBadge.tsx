import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getColorByCategory, unslugify } from '../helpers';
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
        <h3
          className='inline-block p-1 capitalize px-2 py-1'
          style={{
            backgroundColor: categoryColors?.bg,
            color: categoryColors?.fg,
          }}
        >
          {unslugify(categorySlug)}
        </h3>
      </div>
    </>
  );
};
