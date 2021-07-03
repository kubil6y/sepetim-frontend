/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllCategoriesQuery
// ====================================================

export interface getAllCategoriesQuery_getAllCategories_categories {
  __typename: "Category";
  name: string;
  logoImg: string;
  slug: string;
}

export interface getAllCategoriesQuery_getAllCategories {
  __typename: "GetAllCategoriesOutput";
  ok: boolean;
  error: string | null;
  categories: getAllCategoriesQuery_getAllCategories_categories[] | null;
}

export interface getAllCategoriesQuery {
  getAllCategories: getAllCategoriesQuery_getAllCategories;
}
