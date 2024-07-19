import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState = {
    products: []
}

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setStore: (state, action) => {
            state.products = action.payload;
        }, 
        clearStore: (state, action) => {
            state.products = [];
        }
    }
});

export const {setStore, clearStore} = storeSlice.actions;
export default storeSlice.reducer;