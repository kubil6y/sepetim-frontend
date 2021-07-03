import React, { FC } from 'react';
import { useParams } from 'react-router';

interface IParams {
  slug: string;
}

export const CategoryPage: FC = () => {
  const { slug } = useParams<IParams>();
  return (
    <div>
      <div>categoryPage</div>
      <div>{slug}</div>
    </div>
  );
};
