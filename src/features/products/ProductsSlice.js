import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL} from "../../utils/constans";

export const getProducts = createAsyncThunk('products/getProducts',
    async (_, thunkAPI)=>{
        try {
            const res = await axios (`${BASE_URL}/products`);
            return res.data;
        } catch(error){
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    })

const productsSlice = createSlice({
    name: 'products',
    initialState:{
        list:[],
        // filtered:[],
        // related:[],
        isLoading:false,
    },
    extraReducers:(builder) =>{
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
})

export default productsSlice.reducer