import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from "./actions";


const initialState: AuthStateInterface = {
    isSubmitting: false
}
// const authReducer = createReducer('', on(registerAction, (state) => {...state}))
const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
    on(registerAction, (state)=> ({...state, isSubmitting: true}))
    )
})