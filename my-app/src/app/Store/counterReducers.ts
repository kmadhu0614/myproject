import { createReducer, on } from "@ngrx/store";
import { decrement, increment,reset } from "./counterActions";
import { initialState } from "./counterState";

const _myCounterReducer = createReducer(
    initialState,
    on(increment, (state) =>{
        return {
            ...state,
            Counter: state.Counter +1
        }
    }),

    on(decrement, (state) =>{
        return {
            ...state,
            Counter: state.Counter -1
        }
    }),

    on(reset, (state) =>{
        return {
            ...state,
            Counter: 0
        }
    }),

   
);

export function counterReducer(state:any,action:any)
{
    return _myCounterReducer(state,action)
}