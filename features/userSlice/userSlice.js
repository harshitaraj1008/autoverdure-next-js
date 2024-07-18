import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    shippingAddress: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
        }, 
        clearUser: (state) => {
            state.email = '';
            state.shippingAddress = {}
        }
    }
})

export const {setEmail, setShippingAddress, clearUser} = userSlice.actions;
export default userSlice.reducer;