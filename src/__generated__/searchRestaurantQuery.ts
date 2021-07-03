/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchRestaurantInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: searchRestaurantQuery
// ====================================================

export interface searchRestaurantQuery_searchRestaurant_restaurants_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface searchRestaurantQuery_searchRestaurant_restaurants_restaurantRating {
  __typename: "RatingsOutput";
  service: number | null;
  speed: number | null;
  taste: number | null;
}

export interface searchRestaurantQuery_searchRestaurant_restaurants {
  __typename: "Restaurant";
  id: number;
  name: string;
  slug: string;
  logoImg: string;
  district: string;
  category: searchRestaurantQuery_searchRestaurant_restaurants_category | null;
  restaurantRating: searchRestaurantQuery_searchRestaurant_restaurants_restaurantRating;
}

export interface searchRestaurantQuery_searchRestaurant {
  __typename: "SearchRestaurantOutput";
  ok: boolean;
  error: string | null;
  restaurants: searchRestaurantQuery_searchRestaurant_restaurants[] | null;
}

export interface searchRestaurantQuery {
  searchRestaurant: searchRestaurantQuery_searchRestaurant;
}

export interface searchRestaurantQueryVariables {
  input: SearchRestaurantInput;
}
