import React, { FC } from 'react';
import { getColorByCategory } from '../helpers';

interface IBadgeProps {
  categorySlug: any;
  categoryName: any;
}

export const Badge: FC<IBadgeProps> = ({ categorySlug, categoryName }) => {
  const { bg, fg } = getColorByCategory(categorySlug);
  return (
    <div style={{ backgroundColor: bg, color: fg }}>
      <p
        className='font-bold tracking-wide uppercase'
        style={{ padding: '2px', fontSize: '10px' }}
      >
        {categoryName}
      </p>
    </div>
  );
};
