/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetRestaurantInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: getRestaurantQuery
// ====================================================

export interface getRestaurantQuery_getRestaurant_restaurant_restaurantRating {
  __typename: "RatingsOutput";
  taste: number | null;
  speed: number | null;
  service: number | null;
}

export interface getRestaurantQuery_getRestaurant_restaurant_menu_options {
  __typename: "DishOption";
  id: number;
  name: string;
  extra: number;
  calorie: number;
}

export interface getRestaurantQuery_getRestaurant_restaurant_menu {
  __typename: "Dish";
  id: number;
  name: string;
  image: string;
  calorie: number;
  basePrice: number;
  options: getRestaurantQuery_getRestaurant_restaurant_menu_options[] | null;
}

export interface getRestaurantQuery_getRestaurant_restaurant {
  __typename: "Restaurant";
  id: number;
  name: string;
  district: string;
  logoImg: string;
  coverImg: string;
  slug: string;
  restaurantRating: getRestaurantQuery_getRestaurant_restaurant_restaurantRating;
  menu: getRestaurantQuery_getRestaurant_restaurant_menu[];
}

export interface getRestaurantQuery_getRestaurant {
  __typename: "GetRestaurantOutput";
  ok: boolean;
  error: string | null;
  restaurant: getRestaurantQuery_getRestaurant_restaurant | null;
}

export interface getRestaurantQuery {
  getRestaurant: getRestaurantQuery_getRestaurant;
}

export interface getRestaurantQueryVariables {
  input: GetRestaurantInput;
}
