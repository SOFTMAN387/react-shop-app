import { configureStore, createSlice } from "@reduxjs/toolkit";
const addItem = [];
const cartSlice = createSlice({
    name: "cart",
    initialState: addItem,
    reducers: {
        addToCart(state, action) {
            return [...state, action.payload];
        },
        removeToCart(state, action) {
            state = state.filter((x) => {
                return x.id !== action.payload.id;
            })
            return state;
        }

        // addBy(state, action) {
        //     state.counter += action.payload;
        // },

        // lessBy(state, action) {
        //     state.counter -= action.payload;
        // }
    }
})

export const actions = cartSlice.actions;
const store = configureStore({
    reducer: cartSlice.reducer
});

export default store;