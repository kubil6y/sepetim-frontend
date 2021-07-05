/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFiveRestaurantsQuery
// ====================================================

export interface getFiveRestaurantsQuery_getFiveRestaurants_restaurants {
  __typename: "Restaurant";
  id: number;
  coverImg: string;
  slug: string;
  name: string;
}

export interface getFiveRestaurantsQuery_getFiveRestaurants {
  __typename: "GetFiveOutput";
  ok: boolean;
  error: string | null;
  restaurants: getFiveRestaurantsQuery_getFiveRestaurants_restaurants[] | null;
}

export interface getFiveRestaurantsQuery {
  getFiveRestaurants: getFiveRestaurantsQuery_getFiveRestaurants;
}
