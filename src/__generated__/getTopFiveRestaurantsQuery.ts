/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTopFiveRestaurantsQuery
// ====================================================

export interface getTopFiveRestaurantsQuery_getTopFiveRestaurants_ratings_restaurant_restaurantRating {
  __typename: "RatingsOutput";
  taste: number | null;
  speed: number | null;
  service: number | null;
}

export interface getTopFiveRestaurantsQuery_getTopFiveRestaurants_ratings_restaurant {
  __typename: "Restaurant";
  id: number;
  name: string;
  district: string;
  logoImg: string;
  coverImg: string;
  slug: string;
  restaurantRating: getTopFiveRestaurantsQuery_getTopFiveRestaurants_ratings_restaurant_restaurantRating;
}

export interface getTopFiveRestaurantsQuery_getTopFiveRestaurants_ratings {
  __typename: "Rating";
  service: number;
  taste: number;
  speed: number;
  restaurant: getTopFiveRestaurantsQuery_getTopFiveRestaurants_ratings_restaurant;
}

export interface getTopFiveRestaurantsQuery_getTopFiveRestaurants {
  __typename: "Top5RestaurantsOutput";
  ok: boolean;
  error: string | null;
  ratings: getTopFiveRestaurantsQuery_getTopFiveRestaurants_ratings[] | null;
}

export interface getTopFiveRestaurantsQuery {
  getTopFiveRestaurants: getTopFiveRestaurantsQuery_getTopFiveRestaurants;
}
