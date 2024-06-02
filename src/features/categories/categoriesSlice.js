import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constans';

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
  try {
    const res = await axios(`${BASE_URL}/categories`);
    return res.data.splice(0, 5);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
