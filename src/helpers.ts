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

export const capitalize = (term: string) => {
  const str = term.trim();
  if (str.split(' ').length === 0) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  } else {
    const parts = str.split(' ');
    let result = '';
    for (const part of parts) {
      result += part[0].toUpperCase() + part.slice(1).toLowerCase() + ' ';
    }
    return result;
  }
};
