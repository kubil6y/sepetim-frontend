import React, { FC } from 'react';
import { getColorByCategory } from '../helpers';

interface IBadgeProps {
  categoryName: any;
}

export const Badge: FC<IBadgeProps> = ({ categoryName }) => {
  const bg = getColorByCategory(categoryName);
  console.log(bg);
  return (
    <div style={{ backgroundColor: bg }}>
      <p
        className='uppercase tracking-wide font-bold'
        style={{ padding: '2px', fontSize: '10px' }}
      >
        {categoryName}
      </p>
    </div>
  );
};
