import React from 'react';
import { useParams } from 'react-router';

interface IParams {
  slug: string;
}

export const RestaurantDetails = () => {
  const { slug } = useParams<IParams>();
  return (
    <div>
      <div>details page</div>
      <div>{slug}</div>
    </div>
  );
};
