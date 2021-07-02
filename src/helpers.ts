import { CategoryType } from './types';

const categoryColors = {
  'fast food': '#DDD6FE',
  healthy: '#93C5FD',
  pizza: '#FBBF24',
  kebab: '#DB2777',
  vegan: '#6EE7B7',
  beverages: '#FBCFE8',
};

export const getColorByCategory = (categoryName: CategoryType) => {
  return categoryColors[categoryName];
};
