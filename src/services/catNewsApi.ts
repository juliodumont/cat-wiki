import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
  'x-api-key': import.meta.env.VITE_CAT_API_KEY
};
const baseUrl = 'https://api.thecatapi.com/v1';

const createRequest = (url: string) => ({ url, headers });

export const catNewsApi = createApi({
  reducerPath: 'catNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: ({ limit, page }) => createRequest(`/breeds?limit=${limit}&page=${page}`)
    })
  })
});

export const { useGetBreedsQuery } = catNewsApi;
