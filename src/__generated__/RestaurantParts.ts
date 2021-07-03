/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RestaurantParts
// ====================================================

export interface RestaurantParts_restaurantRating {
  __typename: "RatingsOutput";
  taste: number | null;
  speed: number | null;
  service: number | null;
}

export interface RestaurantParts {
  __typename: "Restaurant";
  id: number;
  name: string;
  district: string;
  logoImg: string;
  coverImg: string;
  slug: string;
  restaurantRating: RestaurantParts_restaurantRating;
}
