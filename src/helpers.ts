import { CategoryType } from './types';
// TODO
// it would be better to put them into database.

// light #F9FAFB
// dark #1F2937

const categoryColors = {
  'fast-food': { bg: '#db2777', fg: '#F9FAFB' },
  healthy: { bg: '#93c5fd', fg: '#1F2937' },
  pizza: { bg: '#fbbf24', fg: '#1F2937' },
  kebab: { bg: '#b45309', fg: '#F9FAFB' },
  vegan: { bg: '#34d399', fg: '#1F2937' },
  beverages: { bg: '#fbcfe8', fg: '#1F2937' },
};

export const getColorByCategory = (
  categorySlug: CategoryType
): { bg: string; fg: string } => {
  return categoryColors[categorySlug];
};
