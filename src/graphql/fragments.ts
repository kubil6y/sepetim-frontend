import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment UserParts on User {
    id
    username
    firstName
    lastName
    address
    email
    verified
    role
  }
`;

export const META_FRAGMENT = gql`
  fragment MetaParts on PaginationMeta {
    totalResults
    totalPages
    itemsPerPage
  }
`;

export const RESTAURANT_FRAGMENT = gql`
  fragment RestaurantParts on Restaurant {
    id
    name
    district
    logoImg
    coverImg
    slug
    restaurantRating {
      taste
      speed
      service
    }
  }
`;
