import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //Redux Toolkit uses immer library behind the scenes
            // mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //we can't do state=[]; as by doing this we aren't modifying the state but rather we are changing the reference of the state
            //state.items=[]; will work
            state.items.length=0;
        }
    }
});// createSlice function takes a configuration to create a slice

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

// we can of think of Actions as api to communicate with redux store

// reducer(eg addItem) takes state and action as parameter and will modify state based on action