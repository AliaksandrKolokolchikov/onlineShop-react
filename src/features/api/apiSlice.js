import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {BASE_URL} from "../../utils/constans";


export  const  apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL}),
        tagsTypes: ['Product'],
        endpoints: (builder) => ({
            getProduct: builder.query({
                query: ({ id })=> `/products/${id}`,
                providesTags: ['Product'],
            }),
    }),
});

export const { useGetProductQuery } = apiSlice;
