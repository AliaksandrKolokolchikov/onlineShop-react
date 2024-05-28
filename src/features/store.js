import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/ProductsSlice";
import {apiSlice} from "./api/apiSlice";



export const store = configureStore({
    reducer:{
        categories: categoriesSlice,
        products: productsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    devTools:true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})