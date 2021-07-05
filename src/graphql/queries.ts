import { gql } from '@apollo/client';
import { META_FRAGMENT, RESTAURANT_FRAGMENT, USER_FRAGMENT } from './fragments';

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

export const RESTAURANTS_BY_CATEGORY_QUERY = gql`
  query restaurantsByCategoryQuery($input: RestaurantsByCategoryInput!) {
    restaurantsByCategory(input: $input) {
      ok
      error
      meta {
        ...MetaParts
      }
      results {
        ...RestaurantParts
      }
    }
  }
  ${META_FRAGMENT}
  ${RESTAURANT_FRAGMENT}
`;

export const GET_RESTAURANT_QUERY = gql`
  query getRestaurantQuery($input: GetRestaurantInput!) {
    getRestaurant(input: $input) {
      ok
      error
      restaurant {
        ...RestaurantParts
        menu {
          id
          name
          image
          calorie
          basePrice
          options {
            id
            name
            extra
            calorie
          }
        }
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;
