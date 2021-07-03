/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RestaurantsByCategoryInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: restaurantsByCategoryQuery
// ====================================================

export interface restaurantsByCategoryQuery_restaurantsByCategory_meta {
  __typename: "PaginationMeta";
  totalResults: number | null;
  totalPages: number | null;
  itemsPerPage: number | null;
}

export interface restaurantsByCategoryQuery_restaurantsByCategory_results_restaurantRating {
  __typename: "RatingsOutput";
  taste: number | null;
  speed: number | null;
  service: number | null;
}

export interface restaurantsByCategoryQuery_restaurantsByCategory_results {
  __typename: "Restaurant";
  id: number;
  name: string;
  district: string;
  logoImg: string;
  coverImg: string;
  slug: string;
  restaurantRating: restaurantsByCategoryQuery_restaurantsByCategory_results_restaurantRating;
}

export interface restaurantsByCategoryQuery_restaurantsByCategory {
  __typename: "RestaurantsByCategoryOutput";
  ok: boolean;
  error: string | null;
  meta: restaurantsByCategoryQuery_restaurantsByCategory_meta | null;
  results: restaurantsByCategoryQuery_restaurantsByCategory_results[] | null;
}

export interface restaurantsByCategoryQuery {
  restaurantsByCategory: restaurantsByCategoryQuery_restaurantsByCategory;
}

export interface restaurantsByCategoryQueryVariables {
  input: RestaurantsByCategoryInput;
}
