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

export const GET_FIVE_RESTAURANTS = gql`
  query getFiveRestaurantsQuery {
    getFiveRestaurants {
      ok
      error
      restaurants {
        id
        coverImg
        slug
        name
      }
    }
  }
`;

export const GET_TOP_FIVE_RESTAURANTS_QUERY = gql`
  query getTopFiveRestaurantsQuery {
    getTopFiveRestaurants {
      ok
      error
      ratings {
        service
        taste
        speed
        restaurant {
          ...RestaurantParts
        }
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;

export const GET_MY_ORDERS_QUERY = gql`
  query getMyOrdersQuery($input: GetMyOrdersInput!) {
    getMyOrders(input: $input) {
      ok
      error
      meta {
        ...MetaParts
      }
      results {
        createdAt
        total
        rated
        restaurant {
          logoImg
          name
          category {
            slug
            name
          }
        }
      }
    }
  }
  ${META_FRAGMENT}
`;
