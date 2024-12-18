import { createAction, createReducer, createSelector, emptyProps, on, props } from "@ngrx/store"
import { count } from "rxjs"




// feature -> state, actions, reducer
export interface CounterInterface {
    count: number
}

const counterInitialState: CounterInterface = {
    count:0
}

export const incrementAction = createAction("[Counter] increment")
export const decrementAction = createAction('[Counter] decrement')
export const resetAction = createAction('[Counter] reset');

export const counterReducer = createReducer(
  counterInitialState,
  on(incrementAction, (state) => ({ ...state, count: state.count + 1 })),
  on(decrementAction, (state) => ({ ...state, count: state.count - 1 })),
  on(resetAction, (state=> ({...state, count: 0})))
);


