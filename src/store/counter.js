import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: {
        increment(state) {
            state.counter++; // this is allowed when using redux toolkit bc rtoolkit translates it as 'copy old state and adjust this one specific value'
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) { // only have to accept the action as a parameter where it's needed
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;