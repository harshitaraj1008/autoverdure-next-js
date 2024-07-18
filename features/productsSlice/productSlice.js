import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.selectedProducts.push(action.payload);
    },
    setProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
    clearProducts: (state) => {
      state.selectedProducts = [];
    },
  },
});

export const { addProduct, setProducts, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;