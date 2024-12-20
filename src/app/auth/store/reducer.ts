import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";


const initialState: AuthStateInterface = {
    isSubmitting: false
}
// const authReducer = createReducer('', on(registerAction, (state) => {...state}))
const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
    on(authActions.register, (state)=> ({...state, isSubmitting: true}))
    )
})

export const {name: authFeaturekey, reducer: authReducer, selectIsSubmitting} = authFeature
