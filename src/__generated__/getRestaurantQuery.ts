/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetRestaurantInput, DishTypeEnum } from "./globalTypes";

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
  name: string;
  extra: number;
}

export interface getRestaurantQuery_getRestaurant_restaurant_menu {
  __typename: "Dish";
  id: number;
  name: string;
  description: string | null;
  basePrice: number;
  dishType: DishTypeEnum | null;
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
