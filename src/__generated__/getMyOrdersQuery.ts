/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetMyOrdersInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: getMyOrdersQuery
// ====================================================

export interface getMyOrdersQuery_getMyOrders_meta {
  __typename: "PaginationMeta";
  totalResults: number | null;
  totalPages: number | null;
  itemsPerPage: number | null;
}

export interface getMyOrdersQuery_getMyOrders_results_restaurant_category {
  __typename: "Category";
  slug: string;
  name: string;
}

export interface getMyOrdersQuery_getMyOrders_results_restaurant {
  __typename: "Restaurant";
  logoImg: string;
  name: string;
  category: getMyOrdersQuery_getMyOrders_results_restaurant_category | null;
}

export interface getMyOrdersQuery_getMyOrders_results {
  __typename: "Order";
  createdAt: any;
  total: number;
  rated: boolean;
  restaurant: getMyOrdersQuery_getMyOrders_results_restaurant;
}

export interface getMyOrdersQuery_getMyOrders {
  __typename: "GetMyOrdersOutput";
  ok: boolean;
  error: string | null;
  meta: getMyOrdersQuery_getMyOrders_meta | null;
  results: getMyOrdersQuery_getMyOrders_results[] | null;
}

export interface getMyOrdersQuery {
  getMyOrders: getMyOrdersQuery_getMyOrders;
}

export interface getMyOrdersQueryVariables {
  input: GetMyOrdersInput;
}
