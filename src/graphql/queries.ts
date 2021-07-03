import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './fragments';

export const ME_QUERY = gql`
  query meQuery {
    me {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export const SEARCH_RESTAURANT_QUERY = gql`
  query searchRestaurantQuery($input: SearchRestaurantInput!) {
    searchRestaurant(input: $input) {
      ok
      error
      restaurants {
        id
        name
        slug
        logoImg
        district

        category {
          name
          slug
        }

        restaurantRating {
          service
          speed
          taste
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORIES_QUERY = gql`
  query getAllCategoriesQuery {
    getAllCategories {
      ok
      error
      categories {
        name
        logoImg
        slug
      }
    }
  }
`;
