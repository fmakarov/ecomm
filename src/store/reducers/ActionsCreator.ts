import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URI: string = 'http://localhost:3001/products';

export const fetchProducts = createAsyncThunk(
  'goods/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API_URI);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить данные');
    }
  },
);