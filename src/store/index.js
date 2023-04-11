import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

createSlice({
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
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    // YOU MUST ALWAYS RETURN A NEW STATE RATHER THAN MUTATE THE EXISTING STATE.
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }

    if(action.type === 'increase'){
        return{
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if(action.type === 'toggle'){
        return{
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;