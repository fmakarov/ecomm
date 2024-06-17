import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IElectronics } from '../../types.ts';
import { fetchProducts } from './ActionsCreator.ts';

interface IProductsState {
  goods: IElectronics[];
  isLoading: boolean;
  error: string;
}

const initialState: IProductsState = {
  goods: [],
  isLoading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IElectronics[]>) => {
        state.isLoading = false;
        state.error = '';
        state.goods = action.payload;
      });
  },
});

export const goodsReducer = productsSlice.reducer;
