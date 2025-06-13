import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../../types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-teste' }), // Substitua pela URL correta
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products'
    })
  })
})

export const { useGetProductsQuery } = apiSlice
