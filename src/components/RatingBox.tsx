import React, { FC } from 'react';

interface IRatingBoxProps {
  rating: number;
  title: string;
}

export const RatingBox: FC<IRatingBoxProps> = ({ rating, title }) => {
  return (
    <div className='bg-red-500 flex flex-col items-center justify-center text-white p-1 md:p-2 shadow'>
      <p className='text-xs capitalize'>{title}</p>
      <p className='text-sm md:text-lg'>
        {rating === 0 ? '-' : rating.toFixed(1)}
      </p>
    </div>
  );
};
