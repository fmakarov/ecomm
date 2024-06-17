import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URI: string = 'http://localhost:3001';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URI }),
  endpoints: (build) => ({
    fetchProducts: build.query({
      query: () => ({
        url: '/products',
      }),
    })
  }),
});