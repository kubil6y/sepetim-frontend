/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRoleEnum {
  Admin = "Admin",
  Client = "Client",
}

export interface CreateOrderInput {
  restaurantId: number;
  items: CreateOrderItemInputType[];
}

export interface CreateOrderItemInputType {
  dishId: number;
  dishOptionId?: number | null;
  quantity: number;
}

export interface CreateUserInput {
  username: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
}

export interface EditUserProfileInput {
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface GetMyOrdersInput {
  page?: number | null;
}

export interface GetRestaurantInput {
  slug: string;
}

export interface LoginInput {
  credentials: string;
  password: string;
}

export interface RestaurantsByCategoryInput {
  page?: number | null;
  slug: string;
}

export interface SearchRestaurantInput {
  query: string;
}

export interface VerifyEmailInput {
  code: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
