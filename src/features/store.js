import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/ProductsSlice";



export const store = configureStore({
    reducer:{
        categories: categoriesSlice,
        products: productsSlice,
    },
    devTools:true
})